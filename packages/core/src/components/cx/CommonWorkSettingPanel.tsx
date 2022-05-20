import { defineComponent, PropType, toRefs } from 'vue';
import { createWorkerSetting } from '..';
import { store } from '../../main';
import { CommonWorkSetting } from '../../scripts';
import { Tooltip } from '../Tooltip';

export const CommonWorkSettingPanel = defineComponent({
  props: {
    settings: {
      default: () => {},
      type: Object as PropType<CommonWorkSetting>
    }

  },
  setup (props, { slots }) {
    const { settings } = toRefs(props);

    return () => (
      <>
        {slots.upload
          ? slots.upload()
          : (
            createWorkerSetting(
              '自动答题',
              {
                selected: settings.value.upload
              },
              (e: any) => (settings.value.upload = e.target.value)
            )
          )}

        <label>繁体字识别模式</label>
        <div>
          <Tooltip title="繁体/加密/乱码字识别功能，默认推荐-字典匹配识别\n如果字体匹配识别用不了，可以切换到OCR文字识别。">
            <select onChange={(e:any) => (store.setting.cx.common.recognize = e.target.value)}>
              {
                [['map', '字典匹配识别-推荐'], ['ocr', 'OCR文字识别'], ['close', '关闭繁体字识别']]
                  .map((item) =>
                    <option
                      value={item[0]}
                      selected={ store.setting.cx.common.recognize === item[0] }>
                      {item[1]}
                    </option>
                  )
              }
            </select>
          </Tooltip>
        </div>

        <label>答题间隔(秒)</label>
        <div>
          <input
            type="number"
            value={settings.value.period}
            min="3"
            step="1"
            onChange={(e: any) => (settings.value.period = e.target.valueAsNumber)}
            onInput={(e: any) => (settings.value.period = e.target.valueAsNumber)}
          />
        </div>

        <label>搜题请求超时时间(秒)</label>
        <div>
          <Tooltip title="每道题最多做n秒, 超过则跳过此题。">
            <input
              type="number"
              value={settings.value.timeout}
              min="0"
              step="1"
              onChange={(e: any) => (settings.value.timeout = e.target.valueAsNumber)}
              onInput={(e: any) => (settings.value.timeout = e.target.valueAsNumber)}
            />
          </Tooltip>
        </div>

        <label>搜题超时重试次数</label>
        <div>
          <input
            type="number"
            value={settings.value.retry}
            min="0"
            max="2"
            step="1"
            onChange={(e: any) => (settings.value.retry = e.target.valueAsNumber)}
            onInput={(e: any) => (settings.value.retry = e.target.valueAsNumber)}
          />
        </div>
        <label>答题完成后等待(秒)</label>
        <div>
          <Tooltip title="自动答题完成后的等待时间, 可适当延长方便对题目检查或者使用第三方工具答题。">
            <input
              type="number"
              value={settings.value.waitForCheck}
              min="5"
              step="1"
              onChange={(e: any) => (settings.value.waitForCheck = e.target.valueAsNumber)}
              onInput={(e: any) => (settings.value.waitForCheck = e.target.valueAsNumber)}
            />
          </Tooltip>
        </div>
      </>

    );
  }
});