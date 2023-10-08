let newArr = JSON.parse(weeklyTask);

newArr.forEach((items) => {
  document.getElementById("result").innerHTML += `
    <div class="card" style="width: 25rem; ">
      <img src="${items.img}" class="card-img-top " alt="${items.task}" />
      <div class="card-body">
        <h5 class="card-title">${items.task}</h5>

        <p class="card-text">${items.info}</p>
        <hr />
        <p class="card-text"> ${items.priority}

          <button class="btn btn-primary border-0 like-button bg-success" data-count="0">
            <span class="like">${items.likes}</span>
          </button>
        </p>

        <p class="card-text">${items.deadline}</p>

       <hr/>

        <div class="d-flex gap-2 my-2text-right justify-content-end">
          <button type="button" class="btn btn-primary btn-danger">
            Delete
          </button>
                <button type="button" class="btn btn primary btn-success">
               Done
          </button>
        </div>
      </div>
    </div>
 `;
});

let btns = document.querySelectorAll(".like-button");

btns.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    incLike(i);
  });
});

function incLike(index) {
  let btn = btns[index];
  let count = parseInt(btn.getAttribute("data-count"));

  if (count === 5) return;

  count++;
  btn.setAttribute("data-count", count);
  btn.textContent = count;

  if (count >= 2 && count <= 3) {
    btn.classList.remove("bg-success");
    btn.classList.add("bg-warning");
  } else if (count >= 4 && count <= 5) {
    btn.classList.remove("bg-warning");
    btn.classList.add("bg-danger");
  }
}
