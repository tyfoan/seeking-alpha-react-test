import { useState, useEffect } from 'react';
import LifeCycleService from '../services/LifeCycleService';

interface ITissueProps {
    initialGeneration: number[][];
    cellSize: number;
}

const Tissue = ({
    initialGeneration,
    cellSize,
}: ITissueProps) => {
    const lifeCycleService: LifeCycleService = new LifeCycleService(initialGeneration);
    const [generation, setGeneration] = useState(initialGeneration);

    useEffect(() => {
        setInterval(() => {
            const nextGeneration = lifeCycleService.getNextGeneration();
            setGeneration(nextGeneration);
        }, 400);
    }, []);

    return (
        <div>
            {generation.map((row: number[], i: number) => {
                return (
                    <div
                        key={i}
                        className="row"
                        style={{ height: cellSize }}
                    >
                        {row.map((cell: number, j: number) => (
                            <div
                                key={j}
                                className={`cell ${Boolean(cell) ? 'alive' : 'dead'}`}
                                style={{
                                    height: cellSize,
                                    width: cellSize
                                }}
                            />
                        ))}
                    </div>
                )
            })}
        </div>
    )
}

export default Tissue;
