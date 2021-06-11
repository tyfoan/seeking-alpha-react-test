import Tissue from './Tissue';
import SquareGenerationService from '../services/SquareGenerationService';

const TestSolution = () => {
    const generationService: SquareGenerationService = new SquareGenerationService(5);

    return (
        <div>
            <div className="title">Solution:</div>
            <Tissue
                initialGeneration={generationService.generate()}
                cellSize={50}
            />
        </div>
    )
}

export default TestSolution;
