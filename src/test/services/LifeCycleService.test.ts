import LifeCycleService from '../../services/LifeCycleService'

describe('Life cycle cell service', () => {
    it('Without any change. Matrix 4x4', () => {
        const initialState: number[][] =
            [[0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]];

        const expectedLifeCycle: number[][][] = [
            initialState,
            initialState,
            initialState
        ];

        const service: LifeCycleService = new LifeCycleService(initialState);

        expectedLifeCycle.forEach(state => {
            expect(service.getNextGeneration()).toEqual(state);
        })
    });

    it('Simple line changes direction. Matrix 5x5', () => {
        const initialState: number[][] =
            [[0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]];

        const nextState: number[][] =
            [[0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0]];

        const expectedLifeCycle: number[][][] = [
            nextState,
            initialState,
            nextState,
        ];

        const service: LifeCycleService = new LifeCycleService(initialState);

        expectedLifeCycle.forEach(state => {
            expect(service.getNextGeneration()).toEqual(state);
        })
    });

    it('Moves to the right bottom corner. Matrix 6x6', () => {
        const initialState: number[][] =
            [[0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0],
            [0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]];

        const nextState1: number[][] =
            [[0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]];

        const nextState2: number[][] =
            [[0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0]];

        const nextState3: number[][] =
            [[0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0]];

        const nextState4: number[][] =
            [[0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0]];


        const nextState5: number[][] =
            [[0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 1, 0],
            [0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 0, 0]];

        const nextState6: number[][] =
            [[0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 0],
            [0, 0, 0, 1, 1, 0]];

        const nextState7: number[][] =
            [[0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 1, 1],
            [0, 0, 0, 1, 1, 0]];

        const nextState8: number[][] =
            [[0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 1],
            [0, 0, 0, 1, 1, 1]];

        const nextState9: number[][] =
            [[0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 1],
            [0, 0, 0, 0, 1, 1]];

        const nextState10: number[][] =
            [[0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1],
            [0, 0, 0, 1, 0, 1]];

        const nextState11: number[][] =
            [[0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0],
            [1, 0, 0, 0, 0, 1]];

        const nextState12: number[][] =
            [[1, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0]];

        const nextState13: number[][] =
            [[1, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 1, 0]];

        const nextState14: number[][] =
            [[1, 0, 0, 0, 1, 0],
            [1, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0]];

        const nextState15: number[][] =
            [[1, 1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1]];

        const nextState16: number[][] =
            [[0, 1, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0]];

        const nextState17: number[][] =
            [[0, 1, 0, 0, 0, 1],
            [1, 1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]];

        const nextState18: number[][] =
            [[0, 1, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 1],
            [1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]];

        const expectedLifeCycle = [
            nextState1,
            nextState2,
            nextState3,
            nextState4,
            nextState5,
            nextState6,
            nextState7,
            nextState8,
            nextState9,
            nextState10,
            nextState11,
            nextState12,
            nextState13,
            nextState14,
            nextState15,
            nextState16,
            nextState17,
            nextState18,
        ];

        const service = new LifeCycleService(initialState);

        expectedLifeCycle.forEach(state => {
            expect(service.getNextGeneration()).toEqual(state);
        })
    });

    it('Simple fractal changes. Matrix 6x6', () => {
        const initialState: number[][] =
            [[0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]];

        const nextState: number[][] =
            [[0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]];

        const expectedLifeCycle: number[][][] = [
            nextState,
            initialState,
            nextState,
        ];

        const service = new LifeCycleService(initialState);

        expectedLifeCycle.forEach(state => {
            expect(service.getNextGeneration()).toEqual(state);
        })
    });
});
