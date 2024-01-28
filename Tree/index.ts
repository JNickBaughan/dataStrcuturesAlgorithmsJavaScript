// implement TreeNode
// https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/learn/lecture/8547218#overview
class TreeNode<T> {

    private _data: T | undefined;
    private _children: TreeNode<T>[];

    constructor(data: T) {

        this._data = data;

        this._children = []
    }

    add(data: T) {
        const node = new TreeNode(data);
        this._children = [ node, ...this._children]
    }

}