
var VIDEO_ASPECT_RATIO = 16.0 / 9.0;

var bigTextStrings = [
    "Original Avatar",
    "<em>\"Turn him into a Modigliani painting\"</em>",
    "<em>\"Make him wear traditional Japanese kimono\"</em>",
    "<em>\"Turn him into Tolkien Elf\"</em>",
    "<em>\"Turn him into a clown\"</em>",
    "<em>\"Put the person in a suit\"</em>",
    "<em>\"Turn him into Lord Voldemort\"</em>",
];

var bearTextStrings = [
  "Original NeRF",
  "<em>\"Turn the bear into a grizzly bear\"</em>",
  "<em>\"Turn the bear into a polar bear\"</em>",
  "<em>\"Turn the bear into a panda\"</em>",
];

$("#farm-video").on('loadedmetadata', function() {
    this.width = this.videoWidth;
    this.height = this.videoHeight;
    console.log(this.width, this.height);
  });

$(function() {
    current_big_idx = 0;
    current_bear_idx = 0;

    big9Video = document.getElementById('big-9-video');
    big32Video = document.getElementById('big-32-video');
    bearVideo = document.getElementById('bear-video');

    bigText = document.getElementById('big-text');
    bearText = document.getElementById('bear-text');

    bigThumbnails = [
        document.getElementById('ori'),
        document.getElementById('modi'),
        document.getElementById('jap'),
        document.getElementById('elf'),
        document.getElementById('clown'),
        document.getElementById('suit'),
        document.getElementById('vold'),
      ];
      for (var i = 0; i < bigThumbnails.length; i++) {
        bigThumbnails[i].addEventListener('click', change_big_index.bind(this, i));
      }
      change_big_index(current_big_idx);


      bearThumbnails = [
        document.getElementById('original-bear'),
        document.getElementById('grizzly'),
        document.getElementById('polar'),
        document.getElementById('panda'),
      ];
      for (var i = 0; i < bearThumbnails.length; i++) {
        bearThumbnails[i].addEventListener('click', change_bear_index.bind(this, i));
      }
      change_bear_index(current_bear_idx);

  });
  
function change_big_index (idx) {
    bigThumbnails[idx].classList.add("active-btn");
    if (current_big_idx != idx) {
        bigThumbnails[current_big_idx].classList.remove("active-btn");
    }
    current_big_idx = idx;
    bigText.innerHTML = bigTextStrings[idx];
    big9Video.src = "data/videos/9/converted_9_" + bigThumbnails[idx].id + "_video.mp4";
    big9Video.load();
    big32Video.src = "data/videos/32/converted_32_" + bigThumbnails[idx].id + "_video.mp4";
    big32Video.load();
}

function change_bear_index (idx) {
    bearThumbnails[idx].classList.add("active-btn");
    if (current_bear_idx != idx) {
        bearThumbnails[current_bear_idx].classList.remove("active-btn");
    }
    current_bear_idx = idx;
    bearText.innerHTML = bearTextStrings[idx];
    bearVideo.src = "data/videos/bear/bear-" + bearThumbnails[idx].id + ".mp4";
    bearVideo.load();
}