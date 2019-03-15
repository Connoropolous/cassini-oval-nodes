# cassini-oval-nodes

[Youtube demo of what's there so far](https://youtu.be/CIic4o0fp44)

Just open up index.html in a browser

Criteria::
- begin with a single node with area X
- there is a handle, clickable and grabbable by a user, somewhere inside the node
- when the handle is clicked, grabbed, and dragged, it initiates a "cell division" process
- as the handle is dragged, cassinis ovals start to form
    - the original node is regarded as the 'source', the other (being dragged) is the 'target'
    - the 'source' node maintains its center at its original coordinate
    - the 'target' node can be dragged in any direction from the 'source' node, rotating the cassinis ovals
        - around the origin of the center of the source node
    - the total area of the cassinis ovals should remain a constant
- if the cassini equation passes the point where a = b, which is where they are about to separate, then 
  the nodes will officially become two nodes
- ideally, they should separate, and animate the remainder with easing, creating a bounce effect