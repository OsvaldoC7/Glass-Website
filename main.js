const lista = document.getElementById('lista');

Sortable.create(lista, {
    animation: 150,
    chosenClass: 'seleccionado',
    // ghostClass: 'fantasma',
    // dragClass: 'drag',
    onEnd: () => {
        console.log("Se inserto un elemento")
    },
    group: 'cards',
    store: {
        set: (sortable) => {
            const orden = sortable.toArray();
            localStorage.setItem(sortable.options.group.name, orden.join('|'));
        },
        get: (sortable) => {
            const orden = localStorage.getItem(sortable.options.group.name);
            return orden ? orden.split('|') : [];
        }
    }
});