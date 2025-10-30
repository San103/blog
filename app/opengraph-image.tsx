import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Blog - Magic UI";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const getAssetData = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

    const fontUrls = {
      clashDisplay: `${baseUrl}/fonts/ClashDisplay-Semibold.ttf`,
      cabinetGrotesk: `${baseUrl}/fonts/CabinetGrotesk-Medium.ttf`,
      logo: `${baseUrl}/magicui-logo.png`,
    };

    const [clashDisplayRes, cabinetGroteskRes, logoRes] = await Promise.all([
      fetch(fontUrls.clashDisplay),
      fetch(fontUrls.cabinetGrotesk),
      fetch(fontUrls.logo),
    ]);

    if (!clashDisplayRes.ok || !cabinetGroteskRes.ok || !logoRes.ok) {
      return null;
    }

    const [clashDisplay, cabinetGrotesk, logoImage] = await Promise.all([
      clashDisplayRes.arrayBuffer(),
      cabinetGroteskRes.arrayBuffer(),
      logoRes.arrayBuffer(),
    ]);

    const logoBase64 = `data:image/png;base64,${Buffer.from(logoImage).toString(
      "base64"
    )}`;

    return {
      clashDisplay,
      cabinetGrotesk,
      logoBase64,
    };
  } catch (error) {
    console.error("Failed to load assets:", error);
    return null;
  }
};

const styles = {
  wrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: "40px",
  },
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "4px solid black",
    padding: "60px",
  },
  title: {
    fontSize: "64px",
    color: "black",
    marginBottom: "10px",
    textAlign: "center",
    fontFamily: "Clash Display",
    letterSpacing: "0.5px",
  },
  description: {
    fontSize: "28px",
    color: "black",
    textAlign: "center",
    maxWidth: "800px",
    fontFamily: "Clash Display",
    letterSpacing: "0.5px",
    border: "3px solid black",
    padding: "10px 15px",
    borderRadius: "100px",
  },
} as const;

export default async function Image() {
  try {
    const assetData = await getAssetData();

    return new ImageResponse(
      (
        <div
          style={{
            ...styles.wrapper,
            fontFamily: assetData ? "Clash Display" : "system-ui",
          }}
        >
          <div style={styles.container}>
            <img
              src={
                assetData?.logoBase64 ||
                `${process.env.NEXT_PUBLIC_SITE_URL}/magicui-logo.png`
              }
              alt="MagicUI Logo"
              width={100}
              height={100}
            />
            <h1 style={styles.title}>Blog</h1>
            <p style={styles.description}>
              A blog about design, development, and other things.
            </p>
          </div>
        </div>
      ),
      {
        ...size,
        fonts: assetData
          ? [
              {
                name: "Clash Display",
                data: assetData.clashDisplay,
                weight: 500,
                style: "normal",
              },
              {
                name: "Cabinet Grotesk",
                data: assetData.cabinetGrotesk,
                weight: 500,
                style: "normal",
              },
            ]
          : undefined,
      }
    );
  } catch (error) {
    console.error("Error generating image:", error);
    return new Response(
      `Failed to generate image: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      {
        status: 500,
      }
    );
  }
}
