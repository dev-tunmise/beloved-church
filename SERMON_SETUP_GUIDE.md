# How to Add Sermons and YouTube Videos

This guide explains how to update your sermons page with new YouTube videos.

## Understanding YouTube Video IDs

Every YouTube video has a unique ID. Here's how to find it:

### From a YouTube URL

**Standard URL:**
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```
The video ID is: `dQw4w9WgXcQ` (everything after `v=`)

**Short URL:**
```
https://youtu.be/dQw4w9WgXcQ
```
The video ID is: `dQw4w9WgXcQ` (everything after `.be/`)

## Adding a New Sermon

### Step 1: Find Your Video ID

1. Upload your sermon video to YouTube
2. Copy the video URL
3. Extract the video ID as shown above

### Step 2: Edit the Sermons Page

1. Open `src/app/sermons/page.tsx`
2. Find the `sermons` array (around line 9)
3. Add your new sermon:

```typescript
const sermons = [
  {
    id: 1, // Increment this number for each new sermon
    title: "Your Sermon Title",
    date: "2024-10-13", // Format: YYYY-MM-DD
    videoId: "YOUR_VIDEO_ID_HERE", // Paste the video ID
    description: "A brief description of the sermon message.",
    category: "sermon" // Options: sermon, prophetic, testimony
  },
  // ... existing sermons
];
```

### Step 3: Save and Test

1. Save the file
2. The website will automatically update
3. Check that the video plays correctly

## Setting Up Live Streaming

### Option 1: YouTube Live Stream

1. **Enable Live Streaming on YouTube:**
   - Go to YouTube Studio
   - Click "Create" → "Go Live"
   - Enable live streaming (may take 24 hours for first time)

2. **Get Your Channel ID:**
   - Go to your YouTube channel
   - Click on your profile picture → "Your channel"
   - The URL will look like: `youtube.com/channel/UC...`
   - Copy everything after `/channel/`

3. **Update the Sermons Page:**

Open `src/app/sermons/page.tsx` and find this line:
```tsx
src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
```

Replace `YOUR_CHANNEL_ID` with your actual channel ID:
```tsx
src="https://www.youtube.com/embed/live_stream?channel=UC1234567890abcdef"
```

### Option 2: Facebook Live

1. **Get Your Facebook Page ID:**
   - Go to your Facebook page
   - Click "About"
   - Scroll to "Page ID" and copy it

2. **Add Facebook Live Embed:**

```tsx
<iframe
  src={`https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/YOUR_PAGE_ID/videos/&show_text=false&width=560`}
  width="100%"
  height="100%"
  style={{ border: 'none', overflow: 'hidden' }}
  scrolling="no"
  frameBorder="0"
  allowFullScreen={true}
  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
></iframe>
```

## Organizing Sermons

### Categories

Use these three categories:

1. **sermon** - Regular Sunday messages
2. **prophetic** - Prophetic words and special messages
3. **testimony** - Testimony videos

Example:
```typescript
{
  id: 1,
  title: "Healing Testimony",
  category: "testimony", // This determines the badge color
  // ...
}
```

### Best Practices

1. **Consistent Titles:**
   - Use clear, descriptive titles
   - Format: "Series Name: Part 1 - Topic"
   - Example: "Faith Journey: Part 3 - Walking by Faith"

2. **Good Descriptions:**
   - Keep them brief (1-2 sentences)
   - Highlight the main point
   - Include key scripture references

3. **Regular Updates:**
   - Add new sermons weekly
   - Keep the most recent 20-30 sermons
   - Archive older content if needed

## Creating Video Thumbnails

YouTube automatically creates thumbnails, but you can customize them:

1. **In YouTube Studio:**
   - Click on your video
   - Click "Custom thumbnail"
   - Upload a 1280x720 image (16:9 ratio)

2. **Thumbnail Design Tips:**
   - Use your church colors (royal purple, gold)
   - Include sermon title
   - Use high-quality images
   - Keep text large and readable

## Complete Example

Here's a full example with multiple sermons:

```typescript
const sermons = [
  {
    id: 1,
    title: "The Power of Faith",
    date: "2024-10-13",
    videoId: "abc123def45",
    description: "Learn how faith moves mountains in your life. Based on Mark 11:22-24",
    category: "sermon"
  },
  {
    id: 2,
    title: "Prophetic Word: New Season",
    date: "2024-10-06",
    videoId: "xyz789ghi01",
    description: "God is doing something new in this season. Prepare for fresh anointing!",
    category: "prophetic"
  },
  {
    id: 3,
    title: "Sister Mary's Healing Testimony",
    date: "2024-09-29",
    videoId: "jkl234mno56",
    description: "Miraculous healing from cancer after prayer and faith.",
    category: "testimony"
  },
  {
    id: 4,
    title: "Walking in Divine Purpose",
    date: "2024-09-22",
    videoId: "pqr567stu89",
    description: "Discovering and fulfilling God's unique purpose for your life.",
    category: "sermon"
  },
];
```

## Embedding Sermon Series

If you want to create a sermon series, you can organize them:

```typescript
// Add a series field
{
  id: 1,
  title: "Faith Series: Part 1 - Foundation of Faith",
  series: "Faith Series",
  seriesOrder: 1,
  // ...
}
```

Then group them in the UI:
```tsx
// Group by series
const groupedSermons = sermons.reduce((acc, sermon) => {
  const series = sermon.series || 'Individual Messages';
  if (!acc[series]) acc[series] = [];
  acc[series].push(sermon);
  return acc;
}, {});
```

## Troubleshooting

### Video Won't Play
- Check if video ID is correct
- Verify video is public (not private/unlisted)
- Check internet connection
- Try a different browser

### Live Stream Not Showing
- Verify channel ID is correct
- Check if you're actually live on YouTube
- Make sure live streaming is enabled on your account
- Wait 24 hours if just enabled

### Thumbnail Not Showing
- Use default YouTube thumbnail
- Check image dimensions (1280x720)
- Verify image format (JPG or PNG)

## Quick Reference: File Location

**Sermon Page:** `src/app/sermons/page.tsx`
**Lines to Edit:** Around line 9 (sermons array)

## Video Upload Checklist

Before adding a sermon to the website:

- [ ] Upload video to YouTube
- [ ] Set title and description on YouTube
- [ ] Add to appropriate playlist
- [ ] Set video as Public
- [ ] Create/verify custom thumbnail
- [ ] Copy video ID
- [ ] Add to website sermons array
- [ ] Test video playback on website
- [ ] Share on social media

## Advanced: Automatic YouTube Integration

For automatic sermon updates from your YouTube channel, you'll need:

1. YouTube Data API key
2. Backend integration to fetch videos
3. Database to store sermon data

This is more advanced and may require developer assistance.

---

**Need Help?** Contact your web developer or check YouTube's help center at https://support.google.com/youtube

May your sermons reach and bless many souls! 🙏
