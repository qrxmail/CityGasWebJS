
export const routerConfig =
[
  {
      "key": "/welcome",
      "path": "/welcome",
      "name": "首页",
      "icon": "smile",
      "component": "./Welcome",
      "authority": [
          "admin"
      ]
  },
  {
      "key": "/list",
      "path": "/list",
      "name": "表格实例",
      "icon": "table",
      "component": "./ListTableList",
      "authority": [
          "admin"
      ]
  },
  {
      "key": "/DeviceManagement",
      "path": "/DeviceManagement",
      "name": "设备管理",
      "icon": "crown",
      "authority": [
          "admin"
      ],
      "routes": [
          {
              "key": "/DeviceManagement/ProductDevice",
              "path": "ProductDevice",
              "name": "生产设备及档案",
              "icon": "smile",
              "component": "./DeviceManagement/ProductDevice/index",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/DeviceManagement/PressureVesselDevice",
              "path": "PressureVesselDevice",
              "name": "压力容器",
              "icon": "smile",
              "component": "./DeviceManagement/PressureVesselDevice/index",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/DeviceManagement/PressurePipeDevice",
              "path": "PressurePipeDevice",
              "name": "压力管道",
              "icon": "smile",
              "component": "./DeviceManagement/PressurePipeDevice/index",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/DeviceManagement/ValvePitDevice",
              "path": "ValvePitDevice",
              "name": "阀井阀门",
              "icon": "smile",
              "component": "./DeviceManagement/ValvePitDevice/index",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/DeviceManagement/PressureRegulatingStation",
              "path": "PressureRegulatingStation",
              "name": "调压箱调压柜",
              "icon": "smile",
              "component": "./DeviceManagement/PressureRegulatingStation/index",
              "authority": [
                  "admin"
              ]
          }
      ]
  },
  {
      "key": "/DeviceLedgers",
      "path": "/DeviceLedgers",
      "name": "设备台帐",
      "icon": "crown",
      "routes": [
          {
              "key": "/DeviceLedgers/ProductDevice",
              "path": "ProductDevice",
              "name": "生产设备",
              "icon": "smile",
              "component": "./DeviceLedgers/ProductDevice/index",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/DeviceLedgers/PressureVesselDevice",
              "path": "PressureVesselDevice",
              "name": "压力容器",
              "icon": "smile",
              "component": "./DeviceLedgers/PressureVesselDevice/index",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/DeviceLedgers/PressurePipeDevice",
              "path": "PressurePipeDevice",
              "name": "压力管道",
              "icon": "smile",
              "component": "./DeviceLedgers/PressurePipeDevice/index",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/DeviceLedgers/ValvePitDevice",
              "path": "ValvePitDevice",
              "name": "阀井阀门",
              "icon": "smile",
              "component": "./DeviceLedgers/ValvePitDevice/index",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/DeviceLedgers/PressureRegulatingStation",
              "path": "PressureRegulatingStation",
              "name": "调压箱调压柜",
              "icon": "smile",
              "component": "./DeviceLedgers/PressureRegulatingStation/index",
              "authority": [
                  "admin"
              ]
          }
      ],
      "authority": [
          "admin"
      ]
  },
  {
      "key": "/OperRecord",
      "path": "/OperRecord",
      "name": "设备运行记录",
      "icon": "crown",
      "routes": [
          {
              "key": "/OperRecord/DistributionStationPipeRecordHeader",
              "path": "DistributionStationPipeRecordHeader",
              "name": "储配站运行记录（管道）",
              "icon": "smile",
              "component": "./OperRecord/DistributionStationPipeRecordHeader",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/OperRecord/DistributionStationTruckRecordHeader",
              "path": "DistributionStationTruckRecordHeader",
              "name": "储配站运行记录（槽车）",
              "icon": "smile",
              "component": "./OperRecord/DistributionStationTruckRecordHeader",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/OperRecord/CompressorAtlasRecordHeader",
              "path": "CompressorAtlasRecordHeader",
              "name": "压缩机运行记录（阿塔拉斯）",
              "icon": "smile",
              "component": "./OperRecord/CompressorAtlasRecordHeader",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/OperRecord/CompressorEnricRecordHeader",
              "path": "CompressorEnricRecordHeader",
              "name": "压缩机运行记录（安瑞科）",
              "icon": "smile",
              "component": "./OperRecord/CompressorEnricRecordHeader",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/OperRecord/CompressorJerryRecordHeader",
              "path": "CompressorJerryRecordHeader",
              "name": "压缩机运行记录（杰瑞）",
              "icon": "smile",
              "component": "./OperRecord/CompressorJerryRecordHeader",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/OperRecord/ValvePitMaintanceRecordHeader",
              "path": "ValvePitMaintanceRecordHeader",
              "name": "阀井维护保养记录",
              "icon": "smile",
              "component": "./OperRecord/ValvePitMaintanceRecordHeader",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/OperRecord/CityGasPipelineInspectRecordHeader",
              "path": "CityGasPipelineInspectRecordHeader",
              "name": "城区管网日常巡检",
              "icon": "smile",
              "component": "./OperRecord/CityGasPipelineInspectRecordHeader",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/OperRecord/GeneratorRecordHeader",
              "path": "GeneratorRecordHeader",
              "name": "发电机运行记录",
              "icon": "smile",
              "component": "./OperRecord/GeneratorRecordHeader/index",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/OperRecord/BoilerRecordHeader",
              "path": "BoilerRecordHeader",
              "name": "锅炉运行记录",
              "icon": "smile",
              "component": ".//OperRecord/BoilerRecordHeader/index",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/OperRecord/FirePumpRecordHeader",
              "path": "FirePumpRecordHeader",
              "name": "消防泵运行记录",
              "icon": "smile",
              "component": "./OperRecord/FirePumpRecordHeader/index",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/OperRecord/DryerRecordHeader",
              "path": "DryerRecordHeader",
              "name": "干燥器运行记录",
              "icon": "smile",
              "component": "./OperRecord/DryerRecordHeader",
              "authority": [
                  "admin"
              ]
          }
      ],
      "authority": [
          "admin"
      ]
  },
  {
      "key": "/UseManage",
      "path": "/UseManage",
      "name": "使用管理",
      "icon": "crown",
      "routes": [
          {
              "key": "/UseManage/ReportBug",
              "path": "ReportBug",
              "name": "故障上报",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/UseManage/ReportLeak",
              "path": "ReportLeak",
              "name": "泄漏上报",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/UseManage/RecordWorkChange",
              "path": "RecordWorkChange",
              "name": "交接班管理",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/UseManage/RecordOper",
              "path": "RecordOper",
              "name": "设备操作记录",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/UseManage/ReportAbnormal",
              "path": "ReportAbnormal",
              "name": "设备异常上报",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/UseManage/PlanOper",
              "path": "PlanOper",
              "name": "操作计划制定",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/UseManage/PlanMaintence",
              "path": "PlanMaintence",
              "name": "维修计划制定",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/UseManage/PlanCheck",
              "path": "PlanCheck",
              "name": "校验检修计划制定",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          }
      ],
      "authority": [
          "admin"
      ]
  },
  {
      "key": "/WorkFlowManager/",
      "path": "/WorkFlowManager",
      "name": "流程管理",
      "icon": "crown",
      "routes": [
          {
              "key": "/WorkFlowManager/WorkFlowBuy",
              "path": "WorkFlowBuy",
              "name": "采购流程",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/WorkFlowManager/WorkFlowAccept",
              "path": "WorkFlowAccept",
              "name": "验收流程",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/WorkFlowManager/WorkFlowChangeAsset",
              "path": "WorkFlowChangeAsset",
              "name": "资产转固流程",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/WorkFlowManager/WorkFlowSeal",
              "path": "WorkFlowSeal",
              "name": "封存流程",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/WorkFlowManager/WorkFlowSealUp",
              "path": "WorkFlowSealUp",
              "name": "启封流程",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/WorkFlowManager/WorkFlowAllocat",
              "path": "WorkFlowAllocat",
              "name": "调拨流程",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/WorkFlowManager/WorkFlowScrap",
              "path": "WorkFlowScrap",
              "name": "报废流程",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/WorkFlowManager/WorkFlowTransfer",
              "path": "WorkFlowTransfer",
              "name": "移交流程",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/WorkFlowManager/WorkFlowMainten",
              "path": "WorkFlowMainten",
              "name": "维修流程",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/WorkFlowManager/WorkFlowAlarm",
              "path": "WorkFlowAlarm",
              "name": "报警流程",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          }
      ],
      "authority": [
          "admin"
      ]
  },
  {
      "key": "/TaskCenter",
      "path": "/TaskCenter",
      "name": "任务中心",
      "icon": "crown",
      "routes": [
          {
              "key": "/TaskCenter/TaskAlarm",
              "path": "TaskAlarm",
              "name": "报警处理",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/TaskCenter/TaskOper",
              "path": "TaskOper",
              "name": "操作任务处理",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/TaskCenter/TaskMaintence",
              "path": "TaskMaintence",
              "name": "维修任务处理",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/TaskCenter/TaskCheck",
              "path": "TaskCheck",
              "name": "校验检修任务处理",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/TaskCenter/WorkFlowTask",
              "path": "WorkFlowTask",
              "name": "流程任务处理",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          }
      ],
      "authority": [
          "admin"
      ]
  },
  {
      "key": "/Stat",
      "path": "/Stat",
      "name": "统计分析",
      "icon": "crown",
      "routes": [
          {
              "key": "/Stat/StatReliefCheck",
              "path": "StatReliefCheck",
              "name": "安全阀校验统计",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/Stat/StatDeviceAvailable",
              "path": "StatDeviceAvailable",
              "name": "设备完好率报表",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/Stat/StatLeak",
              "path": "StatLeak",
              "name": "设备泄漏率报表",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/Stat/StatDeviceCost",
              "path": "StatDeviceCost",
              "name": "设备费用统计",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          }
      ],
      "authority": [
          "admin"
      ]
  },
  {
      "key": "/SpareManger",
      "path": "/SpareManger",
      "name": "备件库",
      "icon": "crown",
      "routes": [
          {
              "key": "/SpareManger/SpareList",
              "path": "SpareList",
              "name": "备品备件管理",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/SpareManger/SpareLedgers",
              "path": "SpareLedgers",
              "name": "备品备件台帐",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          }
      ],
      "authority": [
          "admin"
      ]
  },
  {
      "key": "/ToolManger",
      "path": "/ToolManger",
      "name": "工具库",
      "icon": "crown",
      "routes": [
          {
              "key": "/ToolManger/ToolList",
              "path": "ToolList",
              "name": "工具管理",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/ToolManger/ToolLedgers",
              "path": "ToolLedgers",
              "name": "工具台帐",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          }
      ],
      "authority": [
          "admin"
      ]
  },
  {
      "key": "/SpecialDeviceManger",
      "path": "/SpecialDeviceManger",
      "name": "特种设备",
      "icon": "crown",
      "routes": [
          {
              "key": "/SpecialDeviceManger/SpecialList",
              "path": "SpecialList",
              "name": "特种设备管理",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/SpecialDeviceManger/SpecialLedgers",
              "path": "SpecialLedgers",
              "name": "特种设备台帐",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          }
      ],
      "authority": [
          "admin"
      ]
  },
  {
      "key": "/AssetsManger",
      "path": "/AssetsManger",
      "name": "固定资产",
      "icon": "crown",
      "routes": [
          {
              "key": "/AssetsManger/AssetsList",
              "path": "AssetsList",
              "name": "固定资产管理",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/AssetsManger/AssetsLedgers",
              "path": "AssetsLedgers",
              "name": "固定资产台帐",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          }
      ],
      "authority": [
          "admin"
      ]
  },
  {
      "key": "/Documents",
      "path": "/Documents",
      "name": "资料管理",
      "icon": "crown",
      "routes": [
          {
              "key": "/Documents/MaintenanceProcedures",
              "path": "MaintenanceProcedures",
              "name": "维护保养规程",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/Documents/Experience",
              "path": "Experience",
              "name": "维护经验",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/Documents/LawsAndRegulations",
              "path": "LawsAndRegulations",
              "name": "法律法规",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/Documents/Notice",
              "path": "Notice",
              "name": "通知公告",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/Documents/Files",
              "path": "Files",
              "name": "文件",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/Documents/ReportMaterials",
              "path": "ReportMaterials",
              "name": "汇报材料",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/Documents/LearningMaterials",
              "path": "LearningMaterials",
              "name": "学习材料",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/Documents/OtherDocuments",
              "path": "OtherDocuments",
              "name": "其它资料",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/Documents/Suppliers",
              "path": "Suppliers",
              "name": "厂家信息",
              "icon": "smile",
              "component": "./Welcome",
              "authority": [
                  "admin"
              ]
          }
      ],
      "authority": [
          "admin"
      ]
  },
  {
      "key": "/Charts",
      "path": "Charts",
      "name": "总览",
      "icon": "smile",
      "component": "./Charts",
      "authority": [
          "user",
          "admin"
      ]
  },
  {
      "key": "/OilStationView",
      "path": "OilStationView",
      "name": "站点浏览",
      "icon": "smile",
      "component": "./OilStationView",
      "authority": [
          "user",
          "admin"
      ],
      "hideInMenu": true
  },
  {
      "key": "/WorkTicketView",
      "path": "WorkTicketView",
      "name": "工单详情",
      "icon": "smile",
      "component": "./WorkTicketView",
      "authority": [
          "user",
          "admin"
      ],
      "hideInMenu": true
  },
  {
      "key": "/OilStation",
      "path": "OilStation",
      "name": "站点管理",
      "icon": "smile",
      "component": "./OilStation",
      "authority": [
          "user",
          "admin"
      ]
  },
  {
      "key": "/WorkTicket",
      "path": "WorkTicket",
      "name": "工单管理",
      "icon": "smile",
      "authority": [
          "user",
          "admin"
      ],
      "routes": [
          {
              "key": "/WorkTicketList",
              "path": "WorkTicketList",
              "name": "全部工单",
              "icon": "smile",
              "component": "./WorkTicket",
              "authority": [
                  "user",
                  "admin"
              ]
          },
          {
              "key": "/WorkTicketGrant",
              "path": "WorkTicketGrant",
              "name": "待授权",
              "icon": "smile",
              "component": "./WorkTicket",
              "authority": [
                  "user",
                  "admin"
              ]
          },
          {
              "key": "/WorkTicketReceive",
              "path": "WorkTicketReceive",
              "name": "待接单",
              "icon": "smile",
              "component": "./WorkTicket",
              "authority": [
                  "user",
                  "admin"
              ]
          },
          {
              "key": "/WorkTicketLoad",
              "path": "WorkTicketLoad",
              "name": "待拉油",
              "icon": "smile",
              "component": "./WorkTicket",
              "authority": [
                  "user",
                  "admin"
              ]
          },
          {
              "key": "/WorkTicketUnLoad",
              "path": "WorkTicketUnLoad",
              "name": "待卸油",
              "icon": "smile",
              "component": "./WorkTicket",
              "authority": [
                  "user",
                  "admin"
              ]
          },
          {
              "key": "/WorkTicketReview",
              "path": "WorkTicketReview",
              "name": "待审批",
              "icon": "smile",
              "component": "./WorkTicket",
              "authority": [
                  "user",
                  "admin"
              ]
          }
      ]
  },
  {
      "key": "/Driver",
      "path": "Driver",
      "name": "司机管理",
      "icon": "smile",
      "component": "./Driver",
      "authority": [
          "user",
          "admin"
      ]
  },
  {
      "key": "/Truck",
      "path": "Truck",
      "name": "车辆管理",
      "icon": "smile",
      "component": "./Truck",
      "authority": [
          "user",
          "admin"
      ]
  },
  {
      "key": "/Reports",
      "path": "Reports",
      "name": "报表",
      "icon": "smile",
      "component": "./Reports",
      "authority": [
          "user",
          "admin"
      ]
  },
  {
      "key": "/SystemManagement",
      "path": "/SystemManagement",
      "name": "系统管理",
      "icon": "crown",
      "routes": [
          {
              "key": "/SystemManagement/users",
              "path": "users",
              "name": "用户管理",
              "icon": "smile",
              "component": "./user",
              "authority": [
                  "admin"
              ]
          },
          {
              "key": "/SystemManagement/roles",
              "path": "roles",
              "name": "角色管理",
              "icon": "smile",
              "component": "./role",
              "authority": [
                  "admin"
              ]
          }
      ],
      "authority": [
          "admin"
      ]
  },
  {
      "key": "/HrefCMS",
      "path": "HrefCMS",
      "name": "测试",
      "icon": "smile",
      "component": "./HrefCMS",
      "authority": [
          "user",
          "admin"
      ]
  },
  {
      "key": "/",
      "path": "/",
      "redirect": "/Charts"
  },
  {
      "key": "/index.html",
      "path": "/index.html",
      "redirect": "/user/login"
  }
];