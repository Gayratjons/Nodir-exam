let elPostsList = document.querySelector('.list');

document.addEventListener('DOMContentLoaded', async () => {
    let data = await fetch('https://dummyjson.com/posts', {
        method: 'GET',
    });
    let post_data = await data.json();
    let elFrag = document.createDocumentFragment();
    post_data.posts.forEach(element => {
        let newTitle = document.createElement('a');
        let newLi = document.createElement('li');
        let newText = document.createElement('p');
        let newTags = document.createElement('p');
        newTitle.href = '#';
        newTitle.textContent = element.title;
        newText.textContent = element.body;
        newTags.textContent = element.tags;
        newLi.append(newTitle);
        newLi.append(newText);
        newLi.append(newTags);
        elFrag.append(newLi);
    });
    elPostsList.append(elFrag);
});
