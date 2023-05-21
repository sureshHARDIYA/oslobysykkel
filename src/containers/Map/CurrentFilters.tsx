import { Tag, Row } from 'antd';
import styled from 'styled-components';

import { CurrentFilterProps, FilterProps } from '../types';
import { capitalizeFirstCharacter } from '../../utils/captializeFirstCharacter';

const CurrentFilter = ({
  actFilered,
  handleFilterClose,
  setFormValues,
  initialValues,
  isShowClearAll,
  form,
}: CurrentFilterProps) => {
  return (
    <StyledRow>
      {isShowClearAll && (
        <Tag
          color="grey"
          bordered={false}
          closable
          onClose={() => {
            setFormValues(initialValues);
            form.resetFields();
            form.setFieldsValue({
              is_renting: '',
            });
          }}
        >
          Clear All
        </Tag>
      )}
      {Object.keys(actFilered).map((filterItem) => {
        if (filterItem) {
          return (
            <Tag
              color="blue"
              bordered={false}
              closable
              key={filterItem}
              onClose={() => {
                handleFilterClose(filterItem);
                form.setFieldsValue({
                  [filterItem]:
                    initialValues[
                      filterItem as keyof FilterProps
                    ],
                });
              }}
            >
              <strong>
                {capitalizeFirstCharacter(filterItem)}
              </strong>
              {`: ${(actFilered as any)[filterItem]}`}
            </Tag>
          );
        }

        return null;
      })}
    </StyledRow>
  );
};

export default CurrentFilter;

const StyledRow = styled(Row)`
  margin-bottom: 1rem;
`;
