import { Tag } from 'antd';

const CurrentFilter = ({
  actFilered,
  handleFilterClose,
  setFormValues,
  initialValues,
  isShowClearAll,
}: any) => {
  return (
    <div>
      <>
        {isShowClearAll && (
          <Tag
            color="grey"
            bordered={false}
            closable
            onClose={() => {
              setFormValues(initialValues);
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
                onClose={() =>
                  handleFilterClose(filterItem)
                }
              >
                {`${filterItem}: ${
                  (actFilered as any)[filterItem]
                }`}
              </Tag>
            );
          }

          return null;
        })}
        <br />
        <br />
      </>
    </div>
  );
};

export default CurrentFilter;
