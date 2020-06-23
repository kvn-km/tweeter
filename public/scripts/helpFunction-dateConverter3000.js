// we need to convert the date to something more human

// enter, The Date Converter 3000 !!
function dateConverter3000(date) {
  let seconds = (date / 1000).toFixed(1);
  let minutes = (date / (1000 * 60)).toFixed(1);
  let hours = (date / (1000 * 60 * 60)).toFixed(1);
  let days = (date / (1000 * 60 * 60 * 24)).toFixed(1);
  let weeks = (date / (1000 * 60 * 60 * 24 * 7)).toFixed(1);
  let months = (date / (1000 * 60 * 60 * 24 * 30)).toFixed(1);
  let years = (date / (1000 * 60 * 60 * 24 * 365)).toFixed(1);
  if (seconds < 60) {
    if (seconds === 1.0) {
      return `1 second ago`;
    } else {
      return `${seconds} seconds ago`;
    }
  } else if (minutes < 60) {
    if (minutes === 1.0) {
      return `1 minute ago`;
    } else {
      return `${minutes} minutes ago`;
    }
  } else if (hours < 24) {
    if (hours === 1.0) {
      return `1 hour ago`;
    } else {
      return `${hours} hours ago`;
    }
  } else if (days < 7) {
    if (days === 1.0) {
      return `1 day ago`;
    } else {
      return `${days} days ago`;
    }
  } else if (weeks < 5) {
    if (weeks === 1.0) {
      return `1 week ago`;
    } else {
      return `${weeks} weeks ago`;
    }
  } else if (months < 12) {
    if (months === 1.0) {
      return `1 month ago`;
    } else {
      return `${months} months ago`;
    }
  } else {
    if (years === 1.0) {
      return `1 year ago`;
    } else {
      return `${years} years ago`;
    }
  }
}
//yea, that happened