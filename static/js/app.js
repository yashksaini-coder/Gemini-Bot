let text_area = document.querySelector('textarea')
let all_chats = document.querySelector('div.chats')
let ask_btn = document.querySelector('button#submit')

// Get response via fetch from the server
async function get_response(query) {
    let response = await fetch("/chat", {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ query })
    })
    return response.json()
}

ask_btn.addEventListener("click", async () => {

    let query = text_area.value;
    text_area.value = ""
    ask_btn.disabled = true
    ask_btn.firstElementChild.style.opacity = "0.8"
    let new_query = document.createElement('div')
    new_query.setAttribute("class", "chat")

    // User part
    let user_query = document.createElement('div')
    user_query.setAttribute('class', 'user')
    let user_avatar_div = document.createElement('div')
    user_avatar_div.innerHTML = `<img class="avatar" src="static/person_avatar.png"/> <span>You</span>`
    let user_question = document.createElement('p')
    user_question.innerText = query
    user_query.append(user_avatar_div, user_question)

    // Gemini-Bot/Gemini part
    let gemini_response = document.createElement('div')
    gemini_response.setAttribute('class', 'gemini')
    let gemini_avatar_div = document.createElement('div')
    gemini_avatar_div.innerHTML = `<img class="avatar" src="static/flask_gem_avatar.png"/> <span>Gemini-Bot</span>`
    let gemini_ans = document.createElement('p')
    gemini_ans.innerHTML = "<div id='loading_div'>Generating your content<span id = 'loading'></span></div>"
    gemini_response.append(gemini_avatar_div, gemini_ans)

    new_query.append(user_query)
    new_query.append(gemini_response)
    all_chats.append(new_query)

    gemini_ans.innerHTML = await get_response(query)
    text_area.value = ""
    ask_btn.disabled = false
    ask_btn.firstElementChild.style.opacity = "1"

    // To retrieve all the items after refresh, using sessionStorage to store them
    // Using array to maintain the order of the chats
    setTimeout(() => {
        // query_array_7_48 contains all the chats
        // if query_array_7_48 is present, get it & push the new query
        // else create query_array_7_48 with the first query
        if (sessionStorage.getItem("query_array_7_48")) {
            let queries = JSON.parse(sessionStorage.getItem("query_array_7_48"))
            queries.push(new_query.outerHTML)
            sessionStorage.setItem("query_array_7_48", JSON.stringify(queries))
        } else {
            sessionStorage.setItem("query_array_7_48", JSON.stringify([new_query.outerHTML]))
        }
    }, 0)  // This part is important to block this line execution upto all the synchronous part is executed

})

text_area.addEventListener("keydown", (event) => {
    if (event.key == 'Enter') {
        ask_btn.click()
    }
})

window.addEventListener("load", () => {
    let whole_html = ""

    // retrieve the array and take all the queries that was stored, then use it
    if (sessionStorage.getItem("query_array_7_48")) {
        let queries = JSON.parse(sessionStorage.getItem("query_array_7_48"))
        for (query of queries) {
            whole_html += query
        }
    }
    all_chats.innerHTML = whole_html

})