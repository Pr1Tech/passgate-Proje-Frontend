import React from "react";

const ClientReturnAddresses = ({ links, setLinks }) => {
  const handleLinkChange = (index, value) => {
    const updatedLinks = [...links];
    updatedLinks[index].linkName = value;
    setLinks(updatedLinks);
  };

  const addLink = () => {
    setLinks([...links, { linkId: Date.now().toString(), linkName: '' }]);
  };

  const removeLink = (index) => {
    if (links.length > 1) {
      const updatedLinks = links.filter((_, i) => i !== index);
      setLinks(updatedLinks);
    }
  };

  return (
    <div className="el-row address-section" style={{ marginTop: '30px' }}>
      <div className="el-col el-col-24 is-guttered">
        <div className="generalTitle">
          <span>Müşteri Dönüş Adresleri</span>
        </div>
      </div>
      <div className="el-col el-col-15 is-guttered">
        {links.map((link, index) => (
          <div
            key={link.linkId}
            className="address-row"
            style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}
          >
            <div className="el-input" style={{ flex: 1, marginRight: '10px' }}>
              <input
                className="el-input__inner"
                type="text"
                placeholder="Link adresi girin..."
                value={link.linkName}
                onChange={(e) => handleLinkChange(index, e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={() => removeLink(index)}
              style={{ marginLeft: '5px' }}
            >
              Sil
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addLink}
          style={{ marginTop: '10px' }}
        >
          Link Ekle
        </button>
      </div>
    </div>
  );
};

export default ClientReturnAddresses;