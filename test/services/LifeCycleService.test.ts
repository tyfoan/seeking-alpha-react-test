import LifeCycleService from '../../src/services/LifeCycleService'

const generateLifeCycle = (ticks: number, service: LifeCycleService) => {
    const lifeCycle: number[] = new Array(ticks).fill(null);

    return lifeCycle.map(_ => {
        return service.tick();
    });
};

describe('Life cycle cell service', () => {
    it.todo('Without any change. Matrix 4x4', () => {
        const initialState: number[][] =
            [[0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]];

        const service = new LifeCycleService(initialState);

        expect(service.tick()).toBe(initialState);
        expect(service.tick()).toBe(initialState);
        expect(service.tick()).toBe(initialState);
    });

    it.todo('Simple line changes direction. Matrix 5x5', () => {
        const initialState: number[][] =
            [[0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]];

        const matrixState2: number[][] =
            [[0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0]];

        const expectedLifeCycle: number[][][] = [
            initialState,
            matrixState2,
            initialState,
        ];

        const service = new LifeCycleService(initialState);

        expect(service.tick()).toBe(expectedLifeCycle[0]);
        expect(service.tick()).toBe(expectedLifeCycle[1]);
        expect(service.tick()).toBe(expectedLifeCycle[2]);
    });

    it.todo('Moves to the right bottom corner. Matrix 6x6', () => {
        const initialState: number[][] =
            [[0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0],
            [0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]];

        const matrixState2: number[][] =
            [[0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0],
            [0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]];

        const expectedLifeCycle: number[][][] = [
            initialState,
            matrixState2,
            initialState,
        ];

        const service = new LifeCycleService(initialState);

        expect(service.tick()).toBe(expectedLifeCycle[0]);
        expect(service.tick()).toBe(expectedLifeCycle[1]);
        expect(service.tick()).toBe(expectedLifeCycle[2]);
    });

    it.todo('Simple fractal changes. Matrix 6x6', () => {
        const initialState: number[][] =
            [[0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]];

        const service = new LifeCycleService(initialState);

        const expectedLifeCycle: number[][] = [[]];

        expect(service.tick()).toBe(expectedLifeCycle[0]);
        expect(service.tick()).toBe(expectedLifeCycle[1]);
        expect(service.tick()).toBe(expectedLifeCycle[2]);
    });

    // TODO: test it later
    // it.todo('Complex big fractal. Matrix 17x17', () => {
    //     const matrix: number[][] =
    //     [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    // });
});
