import React from 'react';
import NumberInput from '../../../components/UI/NumberInput';
import Checkbox from '../../../components/UI/Checkbox';

const PasswordPolicies = ({ policies, setPolicies }) => {
  const handlePolicyChange = (id, field, value) => {
    setPolicies(prev =>
      prev.map(policy =>
        policy.id === id ? { ...policy, [field]: value } : policy
      )
    );
  };

  return (
    <div className="el-row policy-section">
      <div className="el-col el-col-24 is-guttered">
        <div className="generalTitle">
          <span>Şifre Politikaları</span>
        </div>
      </div>
      <div className="el-col el-col-15 is-guttered">
        <div className="el-table">
          <div className="el-table__header">
            <table>
              <thead>
                <tr>
                  <th>Durum</th>
                  <th>Politika Açıklaması</th>
                  <th>Değer</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="el-table__body">
            <table>
              <tbody>
                {policies.map(({ id, policyName, enable, value }) => (
                  <tr key={id}>
                    <td>
                      <Checkbox
                        checked={enable}
                        onChange={(checked) =>
                          handlePolicyChange(id, 'enable', checked)
                        }
                      />
                    </td>
                    <td>{policyName}</td>
                    <td>
                      <NumberInput
                        value={value}
                        min={1}
                        max={50}
                        onChange={(val) =>
                          handlePolicyChange(id, 'value', val)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordPolicies;