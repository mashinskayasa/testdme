export default {
    actions: {
        async fetchUsers(ctx, results = '15') {
            const result = await fetch('https://randomuser.me/api/?results=' + results)
            const users = await result.json()
            ctx.commit('updateUsers', users)
        }
    },
    mutations: {
        updateUsers(state, users) {
            state.users = users.results
        }
    },
    state: {
        users: [],
        nameSearch: '',
        dobSearch: '',
        sortBy: 'last',
        sortAsc: true
    },
    getters: {
        getUsers(state) {
            return state.users
        },
        filteredUsers(state) {
            return state.users
        },
        sortedUsers(state) {
            const users = [...state.users].sort((a, b) => {
                if(a[state.sortBy] > b[state.sortBy]){
                    return 1
                }
                if(a[state.sortBy] < b[state.sortBy]){
                    return -1
                }
                return 0
            })
            if(!state.sortAsc){
                users.reverse()
            }
            return users
        },
    }
}