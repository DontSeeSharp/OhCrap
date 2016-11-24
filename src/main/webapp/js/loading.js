/**
 * Created by Hendrig on 22.09.2016.
 */
function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('page', true);
    show('loading', false);
});

function showPage() {
    show('page', true);
    show('loading', false);
}

function showLoading() {
    show('page', false);
    show('loading', true);
}