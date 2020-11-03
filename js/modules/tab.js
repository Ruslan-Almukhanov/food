function tabs() {
  const tabs = document.querySelectorAll(".tabcontent"),
    parentTabs = document.querySelector(".tabheader__items"),
    tabsTitles = document.querySelectorAll(".tabheader__item");

  const removeClass = () => {
    tabs.forEach(item => {
      item.classList.add("hide");
    });
    tabsTitles.forEach((item, i) => {
      item.classList.remove("tabheader__item_active");
    });
  };

  const showContent = (i = 0) => {
    tabsTitles[i].classList.add("tabheader__item_active");
    tabs[i].classList.remove("hide");
  };

  parentTabs.addEventListener("click", e => {
    let target = e.target;
    if (target.classList.contains("tabheader__item")) {
      tabsTitles.forEach((item, i) => {
        if (target == item) {
          removeClass();
          showContent(i);
        }
      });
    }
  });

  removeClass();
  showContent();
}

export default tabs;
