import { Group, MantineTheme, Text, useMantineTheme } from '@mantine/core';
import { Dropzone, DropzoneStatus } from '@mantine/dropzone';
import { Icon as TablerIcon, Photo, Upload, X } from 'tabler-icons-react';

function getIconColor(status: DropzoneStatus, theme: MantineTheme) {
  return status.accepted
    ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]
    : status.rejected
    ? theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]
    : theme.colorScheme === 'dark'
    ? theme.colors.dark[0]
    : theme.colors.gray[7];
}

function ImageUploadIcon({ status, ...props }: React.ComponentProps<TablerIcon> & { status: DropzoneStatus }) {
  if (status.accepted) {
    return <Upload {...props} />;
  }

  if (status.rejected) {
    return <X {...props} />;
  }

  return <Photo {...props} />;
}

export const dropzoneChildren = (status: DropzoneStatus, theme: MantineTheme) => (
  <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
    <ImageUploadIcon status={status} style={{ color: getIconColor(status, theme) }} size={80} />

    <div>
      <Text size="xl" inline>
        Drag images here or click to select files
      </Text>
      <Text size="sm" color="dimmed" inline mt={7}>
        Attach as many files as you like, each file should not exceed 5mb
      </Text>
    </div>
  </Group>
);

/**
 *
 * @see https://stackoverflow.com/questions/19280901/javascript-upload-and-parse-file-on-fly
 */

const parser = (data) => {
  let parsedata = [];

  let newLinebrk = data.split('\n');
  for (let i = 0; i < newLinebrk.length; i++) {
    parsedata.push(newLinebrk[i].split(','));
  }

  console.table(parsedata);
};

const parseFiles = (files) => {
  var myFile = files[0];
  var reader = new FileReader();

  reader.addEventListener('load', function (e) {
    let csvdata = e.target?.result;
    parser(csvdata);
    //parseCsv.getParsecsvdata(csvdata); // calling function for parse csv data
  });

  reader.readAsBinaryString(myFile);
};

export default function Demo() {
  const theme = useMantineTheme();
  return (
    <Dropzone
      onDrop={parseFiles} //(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      accept={['text/csv']}
    >
      {(status) => dropzoneChildren(status, theme)}
    </Dropzone>
  );
}
