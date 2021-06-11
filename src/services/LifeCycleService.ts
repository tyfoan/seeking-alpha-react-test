const NEIGHBOURS_COORDINATES: number[][] = [
    [-1, -1], [-1, 0], [-1, 1], [0, 1],
    [1, 1], [1, 0], [1, -1], [0, -1],
];
class LifeCycleService {

    nextGeneration: number[][] = [];
    generation: number[][];

    constructor(generation: number[][]) {
        this.generation = generation;
    }

    getNextGeneration(): number[][] {
        this.generation = this.makeNextGeneration();
        this.nextGeneration = [];

        return this.generation;
    }

    private get width(): number {
        return this.generation.length;
    }

    private get height(): number {
        return this.generation[0].length
    }

    private makeNextGeneration(): number[][] {
        for (let x = 0; x < this.width; x++) {
            this.nextGeneration.push([]);
            for (let y = 0; y < this.height; y++) {
                this.nextGeneration[x].push(this.makeNextGenerationCell(x, y));
            }
        }

        return this.nextGeneration;
    }

    private makeNextGenerationCell(cellX: number, cellY: number): number {
        const cell = this.generation[cellX][cellY];
        const neighbours = this.getCellNeighbours(cellX, cellY);

        return this.chooseCellDestiny(cell, neighbours);
    }

    private getCellNeighbours(cellX: number, cellY: number): number[] {
        return NEIGHBOURS_COORDINATES.map(([neighbourX, neighbourY]) => {
            const [newX, newY] = this.makeInfiniteStep(cellX + neighbourX, cellY + neighbourY);

            return this.generation[newX][newY];
        })
    }

    private makeInfiniteStep(x: number, y: number): number[] {
        const correctDeltaX = this.updateIfOutside(x, this.width - 1);
        const correctDeltaY = this.updateIfOutside(y, this.height - 1);

        return [correctDeltaX, correctDeltaY];
    }

    private updateIfOutside(coordinate: number, size: number): number {
        if (coordinate >= 0 && coordinate <= size) {
            return coordinate;
        }

        return coordinate > size ? 0 : size
    }

    private chooseCellDestiny(cell: number, neighbours: number[]): number {
        const aliveNeighbours = this.sumAlive(neighbours);

        if (this.isDead(cell)) {
            if (this.reproduction(aliveNeighbours)) {
               return 1;
            }
        } else {
            if (this.underpopulation(aliveNeighbours)) {
                return 0;
            }
            if (this.isNextGeneration(aliveNeighbours)) {
                return 1;
            }
            if (this.overcrowding(aliveNeighbours)) {
                return 0;
            }
        }

        return 0;
    }

    private sumAlive(neighbours: number[]): number {
        return neighbours.reduce((a, b) => a + b, 0);
    }

    private isDead(cell: number): boolean {
        return cell === 0
    }

    private underpopulation(aliveNeighbours: number): boolean {
        return aliveNeighbours < 2;
    }

    private isNextGeneration(aliveNeighbours: number): boolean {
        return aliveNeighbours === 2 || aliveNeighbours === 3;
    }

    private overcrowding(aliveNeighbours: number): boolean {
        return aliveNeighbours > 3
    }

    private reproduction(aliveNeighbours: number): boolean {
        return aliveNeighbours === 3;
    }
}

export default LifeCycleService;
