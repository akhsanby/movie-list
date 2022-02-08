import { useEffect } from "react";
import $ from "jquery";

// styles
import styles from "../styles/ProgressBar.module.scss";

export default function ProgressBar() {
  const handleProgressBar = () => {
    let scrollPercentage = () => {
      let scrollProgress = document.getElementById("progress");
      let progressValue = document.getElementById("progress-value");
      let pos = document.documentElement.scrollTop;
      let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 100) / calcHeight);
      scrollProgress.style.background = `conic-gradient(#e70634 ${scrollValue}%, #2b2f38 ${scrollValue}%)`;
    };
    window.onscroll = scrollPercentage;
    window.onload = scrollPercentage;
  };

  function scrollToTop() {
    $("#progress-value").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 1000);
    });
  }

  useEffect(() => {
    handleProgressBar();
    scrollToTop();
  });

  return (
    <div className={styles.progress} id="progress">
      <span className={styles.progressValue} id="progress-value">
        <i className="fas fa-chevron-up"></i>
      </span>
    </div>
  );
}
