import yt_dlp
def download(video_id, output_path):
    ydl_opts = {
        'format': 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]',
        'postprocessors': [{
            'key': 'FFmpegMerger',
        }],
        'outtmpl': output_path
    }
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download(['https://www.youtube.com/watch?v=' + video_id])
yt_video_id = "8jT9ygmMvMg" 
download(yt_video_id, './video.mp4')