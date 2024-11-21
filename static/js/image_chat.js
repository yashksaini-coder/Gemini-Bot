let image = document.getElementById("image")
let image_label = document.querySelector("label[for='image']")
let text_area = document.querySelector('textarea')
let ask_btn = document.querySelector('button#submit')
let all_chats = document.querySelector('div.chats')

var imgUrl = null;
var loadedImg = null;

// To send a fetch request to the server at specific endpoint
async function get_response(data) {

    let response = await fetch("/image_chat", {
        method: 'POST',
        body: data
    })
    return response.json()
}

ask_btn.addEventListener("click", async function () {
    if (imgUrl) {
        // Remove the temp image div
        try {
            document.getElementById("temp-user-query").remove()
        } catch (err) {

        }

        let query = text_area.value;
        text_area.value = ""

        const formData = new FormData();
        formData.append('image', loadedImg);   // using the last successfully loaded image that was created during input event
        formData.append('query', query);

        ask_btn.firstElementChild.style.opacity = "0.8"
        ask_btn.disabled = true
        ask_btn.style.cursor = 'not-allowed'

        image_label.firstElementChild.style.opacity = "0.8"
        image_label.disabled = true
        image_label.style.cursor = 'not-allowed'

        let new_query = document.createElement('div')
        new_query.setAttribute("class", "chat")

        // User part
        let user_query = document.createElement('div')
        user_query.setAttribute('class', 'user')
        let user_avatar_div = document.createElement('div')
        user_avatar_div.innerHTML = `<img class="avatar" src="static/person_avatar.png"/> <span>You</span>`
        let user_img_query = document.createElement('img')
        user_img_query.setAttribute('id', "query_img")
        user_img_query.src = `${imgUrl}`  // using the image url that was created during input event
        let user_question = document.createElement('p')
        user_question.innerText = query
        user_query.append(user_avatar_div, user_img_query, user_question)

        // Gemini-Bot/Gemini part
        let gemini_response = document.createElement('div')
        gemini_response.setAttribute('class', 'gemini')
        let gemini_avatar_div = document.createElement('div')
        gemini_avatar_div.innerHTML = `<img class="avatar" src="static/person_avatar"/> <span>Gemini-Bot</span>`
        let gemini_ans = document.createElement('p')
        gemini_ans.innerHTML = "<div id='loading_div'>Generating your content<span id = 'loading'></span></div>"
        gemini_response.append(gemini_avatar_div, gemini_ans)

        // Creating new_query
        new_query.append(user_query)
        new_query.append(gemini_response)

        // Appending the new queries in to chats
        all_chats.append(new_query)

        gemini_ans.innerHTML = await get_response(formData)
        text_area.value = ""

        ask_btn.firstElementChild.style.opacity = "1"
        ask_btn.disabled = false
        ask_btn.style.cursor = 'pointer'

        image_label.firstElementChild.style.opacity = "1"
        image_label.disabled = false
        image_label.style.cursor = 'pointer'

        imgUrl = null;  // remove the previous picture once it has been queried

        // To retrieve all the items after refresh, using sessionStorage to store them
        // Using array to maintain the order of the chats
        setTimeout(() => {
            // query_array_7_48 contains all the chats
            // if query_array_7_48 is present, get it & push the new query
            // else create query_array_7_48 with the first query
            if (sessionStorage.getItem("query_img_array_7_48")) {
                let queries = JSON.parse(sessionStorage.getItem("query_img_array_7_48"))
                queries.push(new_query.outerHTML)
                sessionStorage.setItem("query_img_array_7_48", JSON.stringify(queries))
            } else {
                sessionStorage.setItem("query_img_array_7_48", JSON.stringify([new_query.outerHTML]))
            }
        }, 0)  // This part is important to block this line execution upto all the synchronous part is executed
    } else {
        alert("Please upload an image!")
    }
})

// Show the image when the user uploads it (temporarily)
image.addEventListener("change", () => {

    try {
        let img = image.files[0]
        let img_url = URL.createObjectURL(img)   // may throw error if the image is not uploaded

        loadedImg = img;
        imgUrl = img_url;
        try {
            document.getElementById("temp-user-query").remove()
        } catch (err) {

        }
        let user_query = document.createElement('div')
        user_query.setAttribute('class', 'user')
        user_query.setAttribute('id', 'temp-user-query')
        let user_avatar_div = document.createElement('div')
        user_avatar_div.innerHTML = `<img class="avatar" src="static/person_avatar.png"/> <span>You</span>`
        let user_img_query = document.createElement('img')
        user_img_query.setAttribute('id', "query_temp_img")
        user_img_query.src = `${img_url}`
        user_img_query.style.opacity = "0.8"
        user_query.append(user_avatar_div, user_img_query)

        all_chats.append(user_query)
    } catch (err) {
        console.log(err)
        imgUrl = null;
    }
})

text_area.addEventListener("keydown", (event) => {
    if (event.key == 'Enter') {
        ask_btn.click()
    }
})

// Function to load/retain all the chats when the page is refreshed/loaded
window.addEventListener("load", () => {
    let whole_html = ""
    // retrieve the array and take all the queries that was stored, then use it
    if (sessionStorage.getItem("query_img_array_7_48")) {
        let queries = JSON.parse(sessionStorage.getItem("query_img_array_7_48"))
        for (query of queries) {
            whole_html += query
        }
    }
    all_chats.innerHTML = whole_html
})