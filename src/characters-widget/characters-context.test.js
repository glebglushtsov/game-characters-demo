import { charactersReducer } from "./characters-context";

describe('Characters Context', () => {
  describe('charactersReducer()', () => {
    let initialState;

    beforeEach(() => {
      initialState = [{ id: 1, health: 5 }, { id: 2, health: 10 }];
    });

    it('creates new characters', () => {
      expect(charactersReducer(initialState, { type: 'create', payload: { id: 3, health: 20 } }))
        .toStrictEqual([{ id: 1, health: 5 }, { id: 2, health: 10 }, { id: 3, health: 20 } ]);
    })

    it('updates itecharactersms', () => {
      expect(charactersReducer(initialState, { type: 'update', payload: { id: 1, health: 0 } }))
        .toStrictEqual([{ id: 1, health: 0 }, { id: 2, health: 10 }]);
    })

    it('deletes characters', () => {
      expect(charactersReducer(initialState, { type: 'delete', payload: { id: 2 }}))
        .toStrictEqual([{ id: 1, health: 5 }]);
    })

    it('attacks all characters', () => {
      expect(charactersReducer(initialState, { type: 'attackAll'}))
        .toStrictEqual([{ id: 1, health: 0 }, { id: 2, health: 0 }]);
    })
  });
});
