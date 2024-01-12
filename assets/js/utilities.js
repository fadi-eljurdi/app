function env(path) {
    if (location.href.includes('http://127.0.0.1:5501/')) {
        // this is in dev mode
        return path;
    } else {
        if (location.href.includes('fadi-eljurdi.github.io')) {
            // in production mode
            // add /app/ directory to all links
            return '/app' + path
        }
        return path
    }
}

function timo(date) {
    dayjs.extend(window.dayjs_plugin_relativeTime);
    dayjs();
    const futureDate = dayjs(date);
    // console.log(futureDate.fromNow());
    return futureDate.fromNow()
}


function shareBlog(title, url) {
    if (navigator.share) {
        navigator.share({
            title: title,
            url: url
        })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
    } else {
        console.log('Web Share API not supported');
    }
}


function dotmark(id) {
    var editor = document.getElementById(id)
    var content = editor.innerText
    content = content.replace(/(\r\n|\n|\r)/g, "<br>");

    content = content.replace(/(https?:\/\/\S+)/gi, `<a href="$1">$1</a>`);
    content = content.replace(/_([^*]+)_/g, `<u>$1</u>`);
    content = content.replace(/~([^*]+)~/g, `<s>$1</s>`);
    content = content.replace(/\.\.\.\.(.+?)\.\.\.\./g, "<i>$1</i>");
    content = content.replace(/\.\.\.(.+?)\.\.\./g, "<code class='user-select-all'>$1</code>");
    content = content.replace(/\.\.(.+?)\.\./g, "<b>$1</b>");
    content = content.replace(/!!([\w-]+)/g, `<i class="bi bi-$1"></i>`);
    // content = content.replace(/(?<name>[^\s]+)::(?<url>[^\s]+)/gm, '<a href="$2" title="$2" >$1</a>')
    return content
}

function fixClosingTags(htmlString) {
    const regex = /<\/\s*(\w+)\s*>/g;
    return htmlString.replace(regex, "</$1>");
}


function parseHTML(id, value) { document.getElementById(id).innerHTML = value }

function convertGoogleDriveLink(link) {
    
    try{
        const fileId = link.split("/")[5].split("?")[0];
        return `https://drive.google.com/uc?id=${fileId}`;
    }catch(err){
       console.log(err);
       return link
    }
}

function getYouTubeId(url) {
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/\?v=)|youtu\.be\/)([^\s&]+)/;
    const match = url.match(regex);    
    return match ? match[1] : null;
}


function exId(imageUrl) {
    // Regular expression to match the ID pattern in the URL
    const idRegex = /(?:id=)([^&]+)/;

    // Use the regex to extract the ID from the URL
    const match = imageUrl.match(idRegex);

    // Check if a match is found
    if (match && match[1]) {
        return match[1];
    } else {
        // If no match is found, return null or handle it as needed
        return null;
    }
}

export default { env, timo, dotmark, parseHTML, shareBlog, fixClosingTags, convertGoogleDriveLink, getYouTubeId,exId }