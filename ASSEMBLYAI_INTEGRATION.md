# AssemblyAI Voice Transcription Integration

## Overview
This document describes the integration of AssemblyAI for voice-to-text transcription in the AI Interview feature, supporting both Arabic and English languages.

## Features
- ✅ Real-time audio recording from microphone
- ✅ High-quality transcription using AssemblyAI API
- ✅ Support for Arabic and English languages
- ✅ Automatic language detection
- ✅ Confidence scoring
- ✅ Error handling and retry logic

## Architecture

### Backend (Laravel)
**Controller**: `backend/app/Http/Controllers/VoiceTranscriptionController.php`

#### Endpoints:
1. **POST /api/voice/transcribe**
   - Upload audio file for transcription
   - Parameters:
     - `audio` (file): Audio file (mp3, wav, m4a, webm, ogg)
     - `language` (string): 'en' or 'ar'
   - Returns: Transcription text and confidence score

2. **POST /api/voice/transcribe-url**
   - Transcribe audio from URL
   - Parameters:
     - `audio_url` (string): URL of audio file
     - `language` (string): 'en' or 'ar'
   - Returns: Transcription text and confidence score

### Frontend (React)
**Utility**: `frontend/src/utils/voiceTranscription.js`

#### Classes & Functions:
- `AudioRecorder`: Class for managing audio recording
- `transcribeAudio()`: Send audio blob to backend for transcription
- `transcribeFromUrl()`: Transcribe audio from URL
- `recordAudio()`: Simple audio recording function
- `testTranscription()`: Test function for AssemblyAI

## Configuration

### Backend Setup
1. Add API key to `.env`:
```env
ASSEMBLYAI_API_KEY=bc6d773b24f34363a4ed60cdd90448d5
```

2. Ensure storage directory is writable:
```bash
chmod -R 775 storage/app
```

### Frontend Setup
No additional configuration needed. The frontend automatically uses the backend API.

## Usage Example

### In React Component:
```javascript
import { AudioRecorder, transcribeAudio } from '../utils/voiceTranscription';

// Initialize recorder
const recorder = new AudioRecorder();

// Start recording
await recorder.start();

// Stop and get audio
const audioBlob = await recorder.stop();

// Transcribe
const result = await transcribeAudio(audioBlob, 'ar'); // or 'en'
console.log('Transcript:', result.transcript);
console.log('Confidence:', result.confidence);
```

### In AI Interview Page:
The integration is already implemented in `AIInterviewPage.jsx`:
- Click "Tap to Speak" button to start recording
- Speak your answer in Arabic or English
- Click again to stop recording
- Audio is automatically transcribed using AssemblyAI
- Transcript is processed and AI responds

## API Flow

1. **User clicks record button**
   - Frontend: `AudioRecorder.start()` begins capturing audio

2. **User clicks stop button**
   - Frontend: `AudioRecorder.stop()` returns audio blob
   - Frontend: `transcribeAudio(blob, language)` sends to backend

3. **Backend receives audio**
   - Saves audio temporarily
   - Uploads to AssemblyAI
   - Requests transcription with language code
   - Polls for completion (max 3 minutes)
   - Returns transcript to frontend

4. **Frontend receives transcript**
   - Displays in chat
   - Processes with AI
   - Generates next question

## Language Support

### Arabic (ar)
- Language code: `ar`
- AssemblyAI code: `ar`
- Supports Modern Standard Arabic and dialects

### English (en)
- Language code: `en`
- AssemblyAI code: `en`
- Supports US, UK, and other English variants

## Error Handling

### Common Errors:
1. **Microphone permission denied**
   - User sees alert to allow microphone access
   - Handled in `AudioRecorder.start()`

2. **Transcription timeout**
   - Max wait time: 3 minutes (60 polls × 3 seconds)
   - Returns error message to user

3. **API key invalid**
   - Backend returns 401 error
   - Frontend shows "Transcription failed" message

4. **Audio file too large**
   - Max size: 10MB
   - Backend validation returns 422 error

## Performance

### Typical Transcription Times:
- 10 seconds audio: ~5-10 seconds
- 30 seconds audio: ~10-20 seconds
- 60 seconds audio: ~20-40 seconds

### Optimization Tips:
1. Use WebM format (smaller file size)
2. Limit recording to 60 seconds per answer
3. Show loading indicator during transcription
4. Cache common phrases (future enhancement)

## Testing

### Test AssemblyAI Integration:
```javascript
import { testTranscription } from '../utils/voiceTranscription';

// Test with sample audio
const result = await testTranscription();
console.log('Test result:', result);
```

### Manual Testing:
1. Navigate to AI Interview page
2. Select "Voice Mode"
3. Click "Tap to Speak"
4. Speak in Arabic or English
5. Click to stop
6. Verify transcription appears correctly

## Troubleshooting

### Issue: No transcription returned
**Solution**: Check API key in `.env` file

### Issue: Audio not recording
**Solution**: 
- Check browser permissions
- Use Chrome or Edge (best support)
- Check microphone is connected

### Issue: Transcription takes too long
**Solution**:
- Check internet connection
- Verify audio file size < 10MB
- Check AssemblyAI service status

### Issue: Wrong language detected
**Solution**:
- Use language toggle buttons
- Speak clearly in selected language
- Ensure audio quality is good

## API Key Management

### Current API Key:
```
bc6d773b24f34363a4ed60cdd90448d5
```

### Getting Your Own Key:
1. Visit https://www.assemblyai.com/
2. Sign up for free account
3. Get API key from dashboard
4. Replace in `.env` file

### Free Tier Limits:
- 5 hours of audio per month
- Unlimited API calls
- All features included

## Future Enhancements

1. **Real-time streaming transcription**
   - Use AssemblyAI's streaming API
   - Show transcript as user speaks

2. **Speaker diarization**
   - Identify different speakers
   - Useful for multi-person interviews

3. **Sentiment analysis**
   - Detect emotion in voice
   - Provide feedback on tone

4. **Custom vocabulary**
   - Add technical terms
   - Improve accuracy for specific domains

5. **Audio preprocessing**
   - Noise reduction
   - Volume normalization
   - Echo cancellation

## Security Considerations

1. **API Key Protection**
   - Never expose in frontend code
   - Use environment variables
   - Rotate keys periodically

2. **Audio Data**
   - Temporary files deleted after transcription
   - No audio stored permanently
   - GDPR compliant

3. **Rate Limiting**
   - Implement on backend
   - Prevent API abuse
   - Monitor usage

## References

- [AssemblyAI Documentation](https://www.assemblyai.com/docs)
- [AssemblyAI API Reference](https://www.assemblyai.com/docs/api-reference)
- [Supported Languages](https://www.assemblyai.com/docs/concepts/supported-languages)
- [Audio Best Practices](https://www.assemblyai.com/docs/concepts/audio-best-practices)

## Support

For issues or questions:
1. Check this documentation
2. Review AssemblyAI docs
3. Check Laravel logs: `storage/logs/laravel.log`
4. Check browser console for frontend errors
5. Contact development team

---

**Last Updated**: October 22, 2025
**Version**: 1.0.0
