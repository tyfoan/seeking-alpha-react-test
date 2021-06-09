class LifeCycleService {
    matrix: number[][];

    constructor(initialMatrix: number[][]) {
        this.matrix = initialMatrix;
    }

    tick() {
        return [[]];
    }
}

export default LifeCycleService;
