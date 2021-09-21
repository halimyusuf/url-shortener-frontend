export default function LinksList({ copied, onCopy, linkObj }) {
  const { link, shortCode } = linkObj;
  return (
    <div className="link-list mt-3">
      <div className="d-md-flex justify-content-between align-items-center">
        <div className="mx-3" style={{ overflowWrap: "break-word" }}>
          {link}
        </div>
        <div className="d-md-flex align-items-center">
          <div className="mx-3">
            <a
              style={{ overflowWrap: "break-word" }}
              href={shortCode}
              target="_blank"
              rel="noreferrer"
            >
              {shortCode}
            </a>
          </div>
          <div className="px-3" style={{ minWidth: "130px" }}>
            {copied && <button className="btn-copy copied"> Copied! </button>}
            {!copied && (
              <button onClick={() => onCopy(linkObj)} className="btn-copy">
                Copy
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
