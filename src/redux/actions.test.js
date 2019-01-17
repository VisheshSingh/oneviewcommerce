import * as actions from "./actions";
import * as types from "./constants";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

export const mockStore = configureMockStore([thunkMiddleware]);


it("Handles requesting PENDING and SUCCESS", () => {
    const mockUser = [
        {
            id: 1,
            name: 'John DOe',
            email: 'JOhndoe@gmail.com',
            address: {
                city: 'NYC'
            },
            company: {
                name: 'GMC'
            }
        }
    ] 

    global.fetch = jest.fn(() => Promise.resolve({ json: () => mockUser }));

    const expectedActions = [
      { type: types.Req_users_pending },
      { type: types.Req_users_success, payload: mockUser }
    ];

    const store = mockStore();
    return store.dispatch(actions.requestUsers()).then(() => {
      const action = store.getActions();
      console.log(action);
      expect(action).toEqual(expectedActions);
    });
  });

  
  it("Handles requesting FAILED", () => {
    global.fetch = jest.fn(() =>
      Promise.reject({ json: () => new Error("ERROR") })
    );

    const expectedActions = {
      type: types.Req_users_failed,
      payload: expect.anything()
    };

    const store = mockStore();
    return store.dispatch(actions.requestUsers()).then(() => {
      const action = store.getActions();
      console.log(action)
      expect(action).toContainEqual(expectedActions);
    });
});
