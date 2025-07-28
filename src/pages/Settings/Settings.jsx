import React, { useState,useEffect } from 'react';
import PasswordPolicies from './components/PasswordPolicies';
import ClientReturnAddresses from './components/ClientReturnAddresses';
import './Settings.css';

const Settings = () => {

  const [policies, setPolicies] = useState(null);
  const [links, setLinks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
      const fetchSettings = async () => {
        try {
          const res = await fetch('http://localhost:8080/api/policy/all');
          const data = await res.json();
  
          setPolicies(data.policies);
          setLinks(data.links);
        } catch (err) {
          console.error('Veri çekme hatası:', err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchSettings();
  }, []);

  const handleSave = async () => {
      setSaving(true);
      try {
        const res = await fetch('http://localhost:8080/api/policy/change', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ policies, links })
        });
  
        if (!res.ok) throw new Error('Kayıt başarısız');
  
        alert('Ayarlar kaydedildi!');
      } catch (err) {
        console.error('Kayıt hatası:', err);
        alert('Kayıt sırasında hata oluştu.');
      } finally {
        setSaving(false);
      }
    };

  if (loading) return <p>Yükleniyor...</p>;

  return (
      <form onSubmit={(e) => e.preventDefault()}>
        <PasswordPolicies policies={policies} setPolicies={setPolicies} />
        <ClientReturnAddresses links={links} setLinks={setLinks} />
  
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          style={{ marginTop: '20px' }}
        >
          {saving ? 'Kaydediliyor...' : 'Kaydet'}
        </button>
      </form>
    );
};

export default Settings;
