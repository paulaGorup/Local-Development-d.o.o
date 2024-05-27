document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('togglebutton');
    const hiddenContent = document.querySelector('.hidden-content');
    const content = document.querySelector('.content')

    toggleBtn.addEventListener('click', function() {
        if (hiddenContent.classList.contains('hidden-content')) {
            hiddenContent.classList.remove('hidden-content');
            toggleBtn.textContent = 'Read less';
        } else {
            hiddenContent.classList.add('hidden-content');
            toggleBtn.textContent = 'Read more';
        }
    });
});

document.getElementById('togglebutton').addEventListener('click', function(){

    var extraContent = document.getElementsByClassName('.hidden-content');
    var contentBox = document.getElementsByClassName('.contentbox');
    
    if (extraContent.style.display === 'none' || extraContent.style.display === '') {
        extraContent.style.display = 'block';
        contentBox.style.height = 'auto'; 
    } else {
        extraContent.style.display = 'none';
        contentBox.style.height = 'auto'; 
        document.addEventListener()
    }
})