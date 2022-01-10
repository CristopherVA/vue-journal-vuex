export default () => ({
    isLoading: true,
    entryes: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla recusandae voluptate cum sit culpa commodi magnam et neque quo necessitatibus aperiam aliquid doloremque ullam numquam consectetur, hic repellat, aspernatur quasi!',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla recusandae voluptate cum sit culpa commodi magnam et neque quo necessitatibus aperiam aliquid doloremque ullam numquam consectetur, hic repellat, aspernatur quasi!',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla recusandae voluptate cum sit culpa commodi magnam et neque quo necessitatibus aperiam aliquid doloremque ullam numquam consectetur, hic repellat, aspernatur quasi!',
            picture: null
        }
    ]
})