

export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "No Entry" */ '@/modules/daybook/views/NotEntrySelected.vue')
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "No Entry" */ '@/modules/daybook/views/EntryView.vue')
        }
    ]
}