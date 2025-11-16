export default function VideoEmbed({ url }) {
  return (
    <div style={{ margin: "30px 0" }}>
      <iframe
        width="100%"
        height="400"
        src={url}
        title="Dansol Charity Car Wash"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

