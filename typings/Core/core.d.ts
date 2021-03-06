import ColorModel from "./ColorModels/ColorModel";
import RGB_to_HSL from "@/Core/Converters/RGB_to_HSL";
import ColorSpace from "@/Core/ColorSpace/ColorSpace";
/**
 * 色彩表示与存储类
 */
declare class EssenceColor {
    colorModel?: ColorModel;
    colorSpace?: ColorSpace;
    static DirectConverters: {
        RGB_to_HSL: typeof RGB_to_HSL;
    };
    static ColorModeleList: ColorModel[];
    r?: number;
    g?: number;
    b?: number;
    L?: number;
    l?: number;
    a?: number;
    s?: number;
    h?: number;
    v?: number;
    w?: number;
    x?: number;
    y?: number;
    z?: number;
    alpha?: number;
    constructor(input: any);
    /**
     * 根据输入设置当前 color
     */
    set(this: any, args: IArguments): void;
    /**
     * 根据输入设置当前 color 色彩空间
     * @param input
     * @private
     */
    private _setColorSpace;
    /**
     * 返回当前 color 色彩空间
     * @returns {ColorSpace}
     * @private
     */
    private _getColorSpace;
    /**
     * 从当前 color 中创建新 color，并转换到指定色彩模型
     * @param {ColorModel} targetColorModel
     * @returns {EssenceColor}
     * @private
     */
    private _getColorByModel;
    getHSL(): EssenceColor;
    getRGB(): EssenceColor;
    getLab(): EssenceColor;
    getHSV(): EssenceColor;
    getHWB(): EssenceColor;
    getXYZ(): EssenceColor;
    static ESSENCE_COLOR: number;
}
export default EssenceColor;
