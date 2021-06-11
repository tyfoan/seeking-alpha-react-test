import Tissue from './Tissue';

interface IGenerationExample {
    generation: number[][];
    key: string;
}

const YourExamples = () => {
    const blockGenerationExample: number[][] =
        [[0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]]

    const lineGenerationExample: number[][] =
        [[0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]]

    const creepyGenerationExample: number[][] =
        [[0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]]

    const fractalGenerationExample: number[][] =
        [[0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]]

    const generationExamples: IGenerationExample[] = [
        { generation: blockGenerationExample, key: 'block' },
        { generation: lineGenerationExample, key: 'line' },
        { generation: creepyGenerationExample, key: 'creepy' },
        { generation: fractalGenerationExample, key: 'fractal' },
    ]

    return (
        <div className="example-container">
            <div className="title">Your examples:</div>
            <div className="examples">
                {generationExamples.map(({ generation, key }) => (
                    <div key={key} className="example">
                        <Tissue
                            initialGeneration={generation}
                            cellSize={20}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default YourExamples;
