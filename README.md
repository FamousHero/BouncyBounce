# BouncyBounce
Small project written in js. Inspired by the instagram page https://www.instagram.com/bouncing_ba11s/ . 
After playing around with it, I started to notice something. Spacing out the start_x & start_y value gave a somewhat oscillating line. If you add enough circles that they stack on top of one another, they look like a linear sin(x) function. Looking further, the reason it looked linear was because I wasn't thinking of each point as a period in time. Coding Train explains it well: https://youtu.be/JLAc9hMtcxk?si=-49RTOxR6S9QDDWj. Instead of thinking of moving the points up and down, you should think of them as static and being moved by time.

Better video: https://youtu.be/Vw-RwPBWS8g?si=lKHVomDrbt79GGd1

So I have sin working, only issue is breaks in the chain. It seems like the period doesn't match [0, width] but [1/4 * width, 3/4 * width]

Link: https://youtu.be/JLAc9hMtcxk?t=194
The reason sin breaks is because each point should have a different period. Those closer to 1 should be faster. Those closer to 0 should be slower [Ref: https://youtu.be/JLAc9hMtcxk?t=221]. Thus its easier to graph against time (increment x each frame)