import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  Chip,
  Alert,
  Divider,
  Grid
} from '@mui/material';
import { Send, ContentCopy } from '@mui/icons-material';
import axios from 'axios';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await axios.post('/api/generate-command', {
        hebrewInput: input.trim()
      });
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'שגיאה בעיבוד הבקשה');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" color="primary">
          🎮 מחולל פקודות Minecraft בעברית
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center" gutterBottom>
          הכנס פקודה בעברית וקבל פקודת Minecraft מוכנה לשימוש
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 2 }}>
          תמיכה בכל סוגי הפקודות: בנייה, שחקנים, עולם, יצורים ועוד!
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
          <TextField
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            label="הכנס פקודה בעברית (למשל: בנה קיר, תן לי חרב)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="דוגמאות: בנה קיר, תן לי חרב, זמן זומבי, שנה ליום..."
            sx={{
              mb: 3,
              '& .MuiInputBase-input': {
                direction: 'rtl',
                textAlign: 'right'
              }
            }}
          />
          
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            disabled={loading || !input.trim()}
            startIcon={<Send />}
            sx={{ mb: 2 }}
          >
            {loading ? 'מעבד...' : 'צור פקודה'}
          </Button>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {result && (
          <Card elevation={2} sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary">
                ✨ תוצאה
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    פקודת Minecraft:
                  </Typography>
                  <Paper 
                    variant="outlined" 
                    sx={{ 
                      p: 2, 
                      bgcolor: 'grey.100',
                      fontFamily: 'monospace',
                      direction: 'ltr',
                      textAlign: 'left'
                    }}
                  >
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Typography variant="body1" component="code">
                        {result.command}
                      </Typography>
                      <Button
                        size="small"
                        startIcon={<ContentCopy />}
                        onClick={() => copyToClipboard(result.command)}
                      >
                        העתק
                      </Button>
                    </Box>
                  </Paper>
                </Grid>

                {result.materials && result.materials.length > 0 && (
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                      חומרים נדרשים:
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={1}>
                      {result.materials.map((material, index) => (
                        <Chip
                          key={index}
                          label={material}
                          variant="outlined"
                          color="secondary"
                        />
                      ))}
                    </Box>
                  </Grid>
                )}

                {result.description && (
                  <Grid item xs={12}>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="body2" color="text.secondary">
                      <strong>הסבר:</strong> {result.description}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </CardContent>
          </Card>
        )}

        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            דוגמאות לפקודות:
          </Typography>
          
          <Typography variant="subtitle2" sx={{ mt: 2, mb: 1, fontWeight: 'bold' }}>
            פקודות בנייה:
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
            {[
              'בנה קיר',
              'צור בית',
              'מלא באבן',
              'בנה מגדל',
              'צור רצפה',
              'בנה גשר'
            ].map((example, index) => (
              <Chip
                key={index}
                label={example}
                variant="outlined"
                clickable
                onClick={() => setInput(example)}
              />
            ))}
          </Box>
          
          <Typography variant="subtitle2" sx={{ mt: 2, mb: 1, fontWeight: 'bold' }}>
            פקודות שחקן - כלים ונשק:
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
            {[
              'תן לי חרב יהלום',
              'תן לי מגרפה',
              'תן לי גרזן ברזל',
              'תן לי קשת צולבת',
              'תן לי מגן',
              'תן לי שריון יהלום'
            ].map((example, index) => (
              <Chip
                key={`tools-${index}`}
                label={example}
                variant="outlined"
                color="primary"
                clickable
                onClick={() => setInput(example)}
              />
            ))}
          </Box>
          
          <Typography variant="subtitle2" sx={{ mt: 2, mb: 1, fontWeight: 'bold' }}>
            פקודות שחקן - אוכל וחומרים:
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
            {[
              'תן לי 10 יהלומים',
              'תן לי לחם',
              'תן לי תפוח זהב',
              'תן לי 100 ברזל',
              'תן לי דלי מים',
              'תן לי תקליט'
            ].map((example, index) => (
              <Chip
                key={`items-${index}`}
                label={example}
                variant="outlined"
                color="secondary"
                clickable
                onClick={() => setInput(example)}
              />
            ))}
          </Box>
          
          <Typography variant="subtitle2" sx={{ mt: 2, mb: 1, fontWeight: 'bold' }}>
            פקודות שחקן - מצב ואפקטים:
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
            {[
              'העבר אותי',
              'שנה ליצירתי',
              'הוסף כוח',
              'הוסף מהירות',
              'כשוף חרב',
              'הוסף ראיית לילה'
            ].map((example, index) => (
              <Chip
                key={`player-${index}`}
                label={example}
                variant="outlined"
                color="info"
                clickable
                onClick={() => setInput(example)}
              />
            ))}
          </Box>
          
          <Typography variant="subtitle2" sx={{ mt: 2, mb: 1, fontWeight: 'bold' }}>
            פקודות עולם:
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
            {[
              'שנה ליום',
              'שנה ללילה',
              'גשם',
              'שמש',
              'רעם',
              'שנה לקל'
            ].map((example, index) => (
              <Chip
                key={`world-${index}`}
                label={example}
                variant="outlined"
                color="secondary"
                clickable
                onClick={() => setInput(example)}
              />
            ))}
          </Box>
          
          <Typography variant="subtitle2" sx={{ mt: 2, mb: 1, fontWeight: 'bold' }}>
            פקודות יצורים:
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {[
              'זמן זומבי',
              'זמן 5 פרות',
              'זמן קריפר',
              'הרג זומבים',
              'זמן דרקון',
              'זמן סוס'
            ].map((example, index) => (
              <Chip
                key={`entity-${index}`}
                label={example}
                variant="outlined"
                color="success"
                clickable
                onClick={() => setInput(example)}
              />
            ))}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;