from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from collections import deque
from typing import List, Dict, Any

app = FastAPI(title="VectorShift Pipeline API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


def check_is_dag(nodes: List[Dict[str, Any]], edges: List[Dict[str, Any]]) -> bool:
    """
    Determine whether the given nodes + edges form a Directed Acyclic Graph
    using Kahn's topological-sort algorithm (BFS-based).
    Returns True if the graph is a DAG, False if it contains a cycle.
    """
    if not nodes:
        return True

    node_ids = {node["id"] for node in nodes}

    # Only consider edges between known nodes
    valid_edges = [
        e for e in edges
        if e.get("source") in node_ids and e.get("target") in node_ids
    ]

    in_degree: Dict[str, int] = {nid: 0 for nid in node_ids}
    adj: Dict[str, List[str]] = {nid: [] for nid in node_ids}

    for edge in valid_edges:
        src = edge["source"]
        tgt = edge["target"]
        adj[src].append(tgt)
        in_degree[tgt] += 1

    # Start BFS from all zero-in-degree nodes
    queue = deque(nid for nid in node_ids if in_degree[nid] == 0)
    visited = 0

    while queue:
        nid = queue.popleft()
        visited += 1
        for neighbor in adj[nid]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    # If every node was visited, there are no cycles → it's a DAG
    return visited == len(node_ids)


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Dict[str, Any]):
    """
    Accepts pipeline JSON with { nodes: [...], edges: [...] } and returns:
      - num_nodes: total node count
      - num_edges: total edge count
      - is_dag:    whether the pipeline is a directed acyclic graph
    """
    nodes = pipeline.get("nodes", [])
    edges = pipeline.get("edges", [])

    return {
        "num_nodes": len(nodes),
        "num_edges": len(edges),
        "is_dag": check_is_dag(nodes, edges),
    }
