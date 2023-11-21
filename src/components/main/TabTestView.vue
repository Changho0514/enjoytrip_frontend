<!-- Add Bootstrap and Popper.js (required for Bootstrap) CDN links in your HTML file if not already added -->
<!-- For example: -->
<!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"> -->
<!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script> -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script> -->
<!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script> -->

<template>
  <section id="featured-services" class="featured-services">
    <div class="container">
      <div class="row gy-4">
        <!-- 이 달의 추천 여행지 -->
        <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
          <div class="card service-item position-relative">
            <div class="card-body">
              <div class="icon"><i class="bi-geo-fill"></i></div>
              <h4>
                <a href="#" class="stretched-link">이 달의 추천 여행지</a>
              </h4>
              <p>여행은 가고 싶은데 어디로 가야할지 모르겠나요?</p>
              <p><b>EnjoyTrip</b>이 추천하는 이 달의 여행지로 떠나보세요</p>
            </div>
          </div>
        </div>
        <!-- Add similar card structures for other service items -->
      </div>
    </div>

    <!-- Tab Section -->
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <div class="tab-content" id="serviceTabs">
            <!-- Tab for 이 달의 추천 여행지 -->
            <div class="tab-pane fade" id="tab1" role="tabpanel">
              <!-- Add content for the 이 달의 추천 여행지 tab -->
            </div>
            <!-- Add similar tab structures for other service items -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Add a script section to handle card click events and tab switching
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const tabContents = document.querySelectorAll(".tab-pane");

  cards.forEach((card, index) => {
    card.addEventListener("click", function () {
      // Remove 'active' class from all cards and tabs
      cards.forEach((c) => c.classList.remove("active"));
      tabContents.forEach((tc) => tc.classList.remove("active"));

      // Add 'active' class to the clicked card and corresponding tab
      card.classList.add("active");
      tabContents[index].classList.add("active");
    });
  });
});
</script>

<style>
/* Add styles for the active state of the card */
.featured-services .card.active {
  background-color: #f8f9fa; /* Use any desired background color for the active state */
}

/* Hide inactive tabs */
.featured-services .tab-pane {
  display: none;
}

/* Show active tab */
.featured-services .tab-pane.active {
  display: block;
}
</style>
