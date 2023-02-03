import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            // sort() создаёт новый массив? или нужно в ручную?...
            let copyState = [...state]
            return action.payload === 'up' ? copyState.sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0) : copyState.sort((a, b) => (b.name < a.name) ? -1 : (b.name > a.name) ? 1 : 0)
        }
        case 'check': {
            // filter() создаёт новый массив? или нужно в ручную?...
            return state.filter(el => el.age >= 18)
        }
        default:
            return state
    }
}
