import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({

    state: {
        postList: [
            {
                id: 1, title: "A chilly day in Tartu",
                date: "September 10, 2021 15.33",
                image: require('./assets/tartu.jpg'),
                alt: "Tartu"
            },
            {
                id: 2,
                title: "A question and an answer",
                date: "September 7, 2021 16.00",
                text: "\"Which one is heavier? A kilogram of steel or a kilogram of feathers?\nIt's obviously a kilogram of steel.",
            },
            {
                id: 3,
                title: "A thought",
                date: "September 6, 2021 14.03",
                text: "When I don't go to sleep, the next day will never come.",
            },
            {
                id: 4,
                date: "September 2, 2021 12.00",
                text: "My leg hurts."
            },
            {
                id: 5,
                title: "dolorem eum magni eos aperiam quia",
                date: "September 1, 2021 18.45",
                text: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
            },
            {
                id: 6,
                title: "magnam facilis autem",
                date: "September 1, 2021 18.00",
                text: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
            },
            {
                id: 7,
                date: "August 29, 2021 15.33",
                text: "Today I saw a cloud looking like a potato.",
            },
            {
                id: 8,
                title: "optio molestias id quia eum",
                date: "August 14, 2021 16.55",
                text: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
            },
            {
                id: 9,
                title: "nesciunt iure omnis dolorem tempora et accusantium",
                date: "August 10, 2021 15.33",
                text: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
            },
            {
                id: 10,
                title: "dolorem dolore est ipsam",
                date: "August 2, 2021 14.01",
                text: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae\n",
            }
        ]
    }
});

