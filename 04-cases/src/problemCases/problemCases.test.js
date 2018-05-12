import assert from 'assert';

/**
 * @typedef {Object} INode
 * @property {string} value
 * @property {Array.<INode>} [childNodes]
 */

/**
 * @param {INode} rootNode
 * @param {function(INode)} nodeProcessor
 */
function nodesTreeWalker(rootNode, nodeProcessor) {
    /**
     * @type {Array.<INode>}
     */
    const queue = [rootNode];

    while(queue.length) {
        // const queueCache = queue;
        // const currentNode = queueCache
        const currentNode = queue.shift();
        if (currentNode.childNodes) {
            queue.push(...currentNode.childNodes);
        }
        nodeProcessor(currentNode);
    }
}

describe('problemCases', () => {

    it('infinity loop', () => {
        const rootNode = {
            value: 'root',
            childNodes: [
                {
                    value: '1.1',
                    childNodes: [
                        {
                            value: '1.1.1'
                        }
                    ]
                },
                {
                    value: '1.2'
                }
            ]
        };

        const nodesList = [];
        nodesTreeWalker(rootNode, node => nodesList.push(node));

        assert.deepEqual(
            ['root', '1.1', '1.2', '1.1.1'],
            nodesList.map(node => node.value)
        )
    });

});