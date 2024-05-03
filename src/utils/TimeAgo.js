export default function timeAgo(dateString) {
    const timestamp = Math.floor(new Date(dateString).getTime() / 1000); // Convert date string to timestamp
    const currentTime = Math.floor(Date.now() / 1000); // Convert milliseconds to seconds
    const timeDifference = currentTime - timestamp;
    const seconds = timeDifference;
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(seconds / 3600);
    const days = Math.round(seconds / 86400);
    const weeks = Math.round(seconds / 604800);
    const months = Math.round(seconds / 2629440);
    const years = Math.round(seconds / 31553280);

    if (seconds <= 60) {
        return 'just now';
    } else if (minutes <= 60) {
        if (minutes === 1) {
            return 'A minute ago';
        } else {
            return `${minutes} minutes ago`;
        }
    } else if (hours <= 24) {
        if (hours === 1) {
            return 'An hour ago';
        } else {
            return `${hours} hours ago`;
        }
    } else if (days <= 7) {
        if (days === 1) {
            return 'A day ago';
        } else {
            return `${days} days ago`;
        }
    } else if (weeks <= 4.3) {
        if (weeks === 1) {
            return 'A week ago';
        } else {
            return `${weeks} weeks ago`;
        }
    } else if (months <= 12) {
        if (months === 1) {
            return 'A month ago';
        } else {
            return `${months} months ago`;
        }
    } else {
        if (years === 1) {
            return 'A year ago';
        } else {
            return `${years} years ago`;
        }
    }
}