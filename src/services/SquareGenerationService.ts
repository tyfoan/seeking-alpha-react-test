class SquareGenerationService {
    size: number;

    constructor(size: number) {
        this.size = size;
    }

    generate(): number[][] {
        const generation: number[][] = [];

        for (let i = 0; i < this.size; i++) {
            generation.push([])
            for (let j = 0; j < this.size; j++) {
                generation[i].push(this._randomLive())
            }
        }

        return generation;
    }

    _randomLive(): number {
        return Math.round(Math.random());
    }
}

export default SquareGenerationService;
