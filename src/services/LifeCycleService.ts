const NEIGHBOURS_X_Y: number[][] = [
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
        this.generation = this._makeNextGeneration();
        this.nextGeneration = [];
        return this.generation;
    }

    get _width(): number {
        return this.generation.length;
    }

    get _height(): number {
        return this.generation[0].length
    }

    _makeNextGeneration(): number[][] {
        for (let x = 0; x < this._width; x++) {
            this.nextGeneration.push([]);
            for (let y = 0; y < this._height; y++) {
                this.nextGeneration[x].push(this._makeNextGenerationCell(x, y));
            }
        }

        return this.nextGeneration;
    }

    _makeNextGenerationCell(cellX: number, cellY: number): number {
        const cell = this.generation[cellX][cellY];
        const neighbours = this._getCellNeighbours(cellX, cellY);

        return this._chooseCellDestiny(cell, neighbours);
    }

    _getCellNeighbours(cellX: number, cellY: number): number[] {
        return NEIGHBOURS_X_Y.map(([neighbourX, neighbourY]) => {
            const [newX, newY] = this._makeInfiniteStep(cellX + neighbourX, cellY + neighbourY);
            return this.generation[newX][newY];
        })
    }

    _makeInfiniteStep(x: number, y: number): number[] {
        const correctDeltaX = this._updateIfOutside(x, this._width - 1);
        const correctDeltaY = this._updateIfOutside(y, this._height - 1);

        return [correctDeltaX, correctDeltaY];
    }

    _updateIfOutside(coordinate: number, size: number): number {
        if(coordinate >= 0 && coordinate <= size) {
            return coordinate;
        }

        return coordinate > size ? 0 : size
    }

    _chooseCellDestiny(cell: number, neighbours: number[]): 0 | 1 {
        const aliveNeghbours = this._aliveNeghbours(neighbours);

        if(this._isDead(cell)) {
            if(this._reproduction(aliveNeghbours)) {
               return 1;
            }
        } else {
            if(this._underpopulation(aliveNeghbours)) {
                return 0;
            }
            if(this._generation(aliveNeghbours)) {
                return 1;
            }
            if(this._overcrowding(aliveNeghbours)) {
                return 0;
            }
        }

        return 0;
    }

    _aliveNeghbours(neghbours: number[]): number {
        return neghbours.reduce((a, b) => a + b, 0);
    }

    _isDead(cell: number): boolean {
        return cell === 0
    }

    _isAlive(cell: number): boolean {
        return cell === 1
    }

    _underpopulation(aliveNeghbours: number) {
        return aliveNeghbours < 2;
    }

    _generation(aliveNeghbours: number) {
        return aliveNeghbours === 2 || aliveNeghbours === 3;
    }

    _overcrowding(aliveNeghbours: number) {
        return aliveNeghbours > 3
    }

    _reproduction(aliveNeghbours: number): boolean {
        return aliveNeghbours === 3;
    }
}

export default LifeCycleService;
