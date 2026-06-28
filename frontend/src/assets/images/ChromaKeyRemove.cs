using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public static class ChromaKeyRemove
{
    public static void Run(string input, string output)
    {
        using (var source = new Bitmap(input))
        using (var bitmap = new Bitmap(source.Width, source.Height, PixelFormat.Format32bppArgb))
        using (var g = Graphics.FromImage(bitmap))
        {
            g.DrawImage(source, 0, 0, source.Width, source.Height);
            var rect = new Rectangle(0, 0, bitmap.Width, bitmap.Height);
            var data = bitmap.LockBits(rect, ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            int bytes = Math.Abs(data.Stride) * bitmap.Height;
            byte[] buffer = new byte[bytes];
            Marshal.Copy(data.Scan0, buffer, 0, bytes);

            for (int y = 0; y < bitmap.Height; y++)
            {
                int row = y * data.Stride;
                for (int x = 0; x < bitmap.Width; x++)
                {
                    int i = row + x * 4;
                    byte b = buffer[i + 0];
                    byte gch = buffer[i + 1];
                    byte r = buffer[i + 2];

                    int greenDominance = gch - Math.Max(r, b);
                    bool hardGreen = gch > 145 && greenDominance > 65 && r < 145 && b < 170;
                    bool softGreen = gch > 105 && greenDominance > 28 && r < 190 && b < 200;

                    if (hardGreen)
                    {
                        buffer[i + 3] = 0;
                    }
                    else if (softGreen)
                    {
                        int alpha = Math.Max(0, Math.Min(255, 255 - ((greenDominance - 28) * 5)));
                        buffer[i + 3] = (byte)Math.Min(buffer[i + 3], alpha);
                        if (buffer[i + 3] > 0 && gch > r && gch > b)
                        {
                            buffer[i + 1] = (byte)Math.Max(Math.Max(r, b), gch - Math.Min(90, greenDominance));
                        }
                    }
                }
            }

            Marshal.Copy(buffer, 0, data.Scan0, bytes);
            bitmap.UnlockBits(data);
            bitmap.Save(output, ImageFormat.Png);
        }
    }
}
